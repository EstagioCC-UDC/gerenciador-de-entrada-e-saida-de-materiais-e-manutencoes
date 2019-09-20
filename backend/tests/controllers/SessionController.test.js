import nock from 'nock';
import { response } from 'jest-mock-express';
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
    scope.post('/auth/realms/dev/protocol/openid-connect/token').reply(200, {
      access_token: `eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJwSS1mR0RFdU5wNHFsVmo1VjUxR3doQWRid1FRSXhEc1lfUnN3MlV5WVRBIn0.eyJqdGkiOiIwMDg2YjAzYS00Mzg3LTQwZmUtYjEyNC1kNGJiYzU4MTJlYWIiLCJleHAiOjE1NjkwMDQ1NzMsIm5iZiI6MCwiaWF0IjoxNTY5MDA0MjczLCJpc3MiOiJodHRwOi8va2V5Y2xvYWs6ODA4MC9hdXRoL3JlYWxtcy9kZXYiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiZTNiOTBiMjctMDkxMC00YjQyLWJlZjYtMjE1ZTc4NTkwZjY1IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiZ2VzbW0iLCJhdXRoX3RpbWUiOjAsInNlc3Npb25fc3RhdGUiOiIzOTIzM2U5NS1iZjA5LTQyODctYTVhYi1iNzgwYTU1ODRiOGYiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJnZXNtbSI6eyJyb2xlcyI6WyJWSUVXRVIiLCJ1bWFfcHJvdGVjdGlvbiIsIkFETUlOIiwiVVNFUiJdfSwiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoidGVzdGUgdGVzdGUiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ0ZXN0ZSIsImdpdmVuX25hbWUiOiJ0ZXN0ZSIsImZhbWlseV9uYW1lIjoidGVzdGUiLCJlbWFpbCI6InRlc3RlQHRlc3RlLmNvbSJ9.clyUp_3G-LD_vRcESPVWjBh1uhXM4N05IOWMXrf72vlSNlD8J4wHy8LijGkqWVqB2VzbOD8za7nAmafFVEnZ27Y6LUI9Jtp-noSAy0l8kUCHclQ4tfyjfpsin3GOJ1C2HyhlUHNwFU7jddsqC6Pb-ij3gu2LXyz2g4tcAnI2pFkgYSH7gLltA1Sm5Cs42hF134CiR3GzNyc6RS9ElT2wLtorV755Ec_4STMvREelXcrBnVFDgX0yPc0E33GmhEELCUhI78Z5iylKnlVd7sO4YwDrtq-jwp6MezUxtep2ZUHWgvJJQa24QXnh7knpQpHp1a50MNrcy5NaO2yRDGc-bg`,
    });

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
