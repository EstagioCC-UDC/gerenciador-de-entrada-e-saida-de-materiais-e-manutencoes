import nock from 'nock';
import { response } from 'jest-mock-express';
import 'dotenv/config';
import SessionController from '../../src/app/controllers/SessionController';

describe('Testing SessionController login method', () => {
  const scope = nock(`http://localhost:8080`);

  test('it should invalidate login', async () => {
    const req = {};
    const res = response();

    await SessionController.login(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledTimes(1);
  });

  test('it should validate login', async () => {
    scope.post('/auth/realms/dev/protocol/openid-connect/token').reply(200, {});

    const req = {
      body: {
        username: 'test',
        password: 'test',
      },
    };
    const res = response();

    await SessionController.login(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledTimes(1);
  });

  test('it should send error when keycloak response has error', async () => {
    scope.post('/auth/realms/dev/protocol/openid-connect/token').reply(400, {});

    const req = {
      body: {
        username: 'test',
        password: 'test',
      },
    };
    const res = response();

    await SessionController.login(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith({
      error: 'Usuário ou senha incorretos',
    });
  });

  test(`it should send different error when keycloak response has error and has refresh token`, async () => {
    scope.post('/auth/realms/dev/protocol/openid-connect/token').reply(400, {});

    const req = {
      body: {
        username: 'test',
        password: 'test',
        refresh_token: 'mocked',
      },
    };
    const res = response();

    await SessionController.login(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith({
      error: 'Sua sessão expirou',
    });
  });
});

describe('Testing SessionController logout method', () => {
  const scope = nock(`http://localhost:8080`);

  test('it should not validate request body', async () => {
    const req = {
      body: {},
    };

    const res = response();

    await SessionController.logout(req, res);
    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith({ error: 'Sessão inválida' });
  });

  test('it should call the keycloak logout endpoint once', async () => {
    scope
      .post('/auth/realms/dev/protocol/openid-connect/logout')
      .reply(204, {});

    const req = {
      body: {
        refresh_token: 'MOCKING',
      },
    };

    const res = response();

    await SessionController.logout(req, res);
    expect(res.status).toHaveBeenCalledWith(204);
    expect(res.status).toHaveBeenCalledTimes(1);
  });
});
