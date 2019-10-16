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

describe('Testing Material Controller update method', () => {
  jest.resetModuleRegistry();
  const update = jest.fn().mockReturnValue(Promise.resolve({}));
  const findOne = jest.fn().mockReturnValue(Promise.resolve({ id: 1 }));
  jest.mock('../../src/app/models/Material', () => {
    return {
      update,
      findOne,
    };
  });
  const MaterialController = require('../../src/app/controllers/MaterialController')
    .default;

  beforeEach(() => {
    update.mockReturnValue(Promise.resolve({}));
    findOne.mockReturnValue(Promise.resolve({}));
  });

  afterEach(() => {
    update.mockReset();
  });

  test('Testing validation for empty object', async () => {
    const req = { body: {}, params: { id: 1 } };
    const res = response();

    await MaterialController.update(req, res);
    expect(update).toHaveBeenCalledTimes(0);
    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(401);
  });

  test('Testing passing validation', async () => {
    const req = {
      body: {
        id: 1,
        nome: 'teste',
        limiar_estoque: 100,
        unidade_medida: 'kg',
        estoque_total: 2000,
        quantidade_caixa: 20,
        identificador_caixa: 'ABC123',
      },
      params: {
        id: 1,
      },
    };
    const res = response();

    await MaterialController.update(req, res);
    expect(update).toHaveBeenCalledTimes(1);
    expect(update).toHaveBeenCalledWith(req.body, { where: { id: 1 } });
  });

  test('Testing validation for element with no id', async () => {
    findOne.mockReturnValueOnce(Promise.reject());

    const req = {
      body: {
        id: 1,
      },
      params: {},
    };
    const res = response();

    await MaterialController.update(req, res);
    expect(update).toHaveBeenCalledTimes(0);
    expect(res.status).toHaveBeenCalledWith(401);
  });
});

describe('Testing Material Controller delete method', () => {
  jest.resetModuleRegistry();
  const destroy = jest.fn().mockReturnValue(Promise.resolve({}));
  jest.mock('../../src/app/models/Material', () => {
    return {
      destroy,
    };
  });
  const MaterialController = require('../../src/app/controllers/MaterialController')
    .default;

  beforeEach(() => {
    destroy.mockReturnValue(Promise.resolve({}));
  });

  afterEach(() => {
    destroy.mockReset();
  });

  test('Testing validation for no id', async () => {
    const req = {
      params: {},
    };
    const res = response();

    await MaterialController.delete(req, res);
    expect(res.status).toHaveBeenCalledWith(401);
  });

  test('Testing destroy method gets called', async () => {
    const req = {
      params: {
        id: 1,
      },
    };
    const res = response();

    await MaterialController.delete(req, res);
    expect(res.status).toHaveBeenCalledWith(204);
    expect(res.send).toHaveBeenCalledTimes(1);
  });

  test('Testing destroy method gets called but throws error', async () => {
    destroy.mockReturnValueOnce(Promise.reject());

    const req = {
      params: {
        id: 1,
      },
    };
    const res = response();

    await MaterialController.delete(req, res);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      error: 'Este material possui entidades associadas a ele',
    });
  });
});
