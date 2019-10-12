import { response } from 'jest-mock-express';

describe('Testing Material Controller index method', () => {
  const res = response();
  /**
   * This mocks the Material model inside MaterialController
   */
  const findAll = jest.fn().mockReturnValueOnce(Promise.resolve([]));
  jest.doMock('../../src/app/models/Material', () => {
    return {
      findAll,
    };
  });
  const MaterialController = require('../../src/app/controllers/MaterialController')
    .default;

  afterEach(() => {
    findAll.mockReset();
  });

  test('findAll method should be called with default page and size values', async () => {
    const req = { query: {} };
    await MaterialController.index(req, res);

    expect(findAll).toHaveBeenCalledTimes(1);
    expect(findAll).toHaveBeenCalledWith({ limit: 10, offset: 0 });
  });

  test('findAll method should be called with limit 20 and offset 20', async () => {
    const req = { query: { page: 1, size: 20 } };
    await MaterialController.index(req, res);

    expect(findAll).toHaveBeenCalledTimes(1);
    expect(findAll).toHaveBeenCalledWith({ limit: 20, offset: 20 });
  });
});
