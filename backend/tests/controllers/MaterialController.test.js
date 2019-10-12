import { response } from 'jest-mock-express';

describe('Testing Material Controller index method', () => {
  const res = response();
  /**
   * This mocks the Material model inside MaterialController
   */
  jest.resetModuleRegistry();
  const findAll = jest.fn().mockReturnValue(Promise.resolve([]));
  jest.mock('../../src/app/models/Material', () => {
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

describe('Testing Material Controller store method', () => {
  jest.resetModuleRegistry();
  const create = jest.fn().mockReturnValue(Promise.resolve({}));
  jest.mock('../../src/app/models/Material', () => {
    return {
      create,
    };
  });
  const MaterialController = require('../../src/app/controllers/MaterialController')
    .default;

  afterEach(() => {
    create.mockReset();
  });

  test('Testing validation for empty object', async () => {
    const req = { body: {} };
    const res = response();

    await MaterialController.store(req, res);
    expect(create).toHaveBeenCalledTimes(0);
    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(401);
  });

  test('Testing passing validation', async () => {
    const req = {
      body: {
        nome: 'teste',
        limiar_estoque: 100,
        unidade_medida: 'kg',
        estoque_total: 2000,
        quantidade_caixa: 20,
        identificador_caixa: 'ABC123',
      },
    };
    const res = response();

    await MaterialController.store(req, res);
    expect(create).toHaveBeenCalledTimes(1);
    expect(create).toHaveBeenCalledWith(req.body);
  });
});
