const {
  KEYCLOAK_BASE_URL,
  KEYCLOAK_REALM,
  KEYCLOAK_TOKEN_PATH,
  KEYCLOAK_CLIENT_ID,
  KEYCLOAK_LOGOUT_PATH,
  KEYCLOAK_SECRET_KEY,
  KEYCLOAK_PUBLIC_KEY,
} = process.env;

export default {
  keycloakBaseUrl: KEYCLOAK_BASE_URL || 'http://localhost:8080/auth/realms',
  keycloakRealm: KEYCLOAK_REALM || 'dev',
  keycloakTokenPath: KEYCLOAK_TOKEN_PATH || 'protocol/openid-connect/token',
  keycloakClientId: KEYCLOAK_CLIENT_ID || 'gesmm',
  keycloakLogoutPath: KEYCLOAK_LOGOUT_PATH || 'protocol/openid-connect/logout',
  keycloakSecretKey:
    KEYCLOAK_SECRET_KEY || '8423cbde-2bd1-48f3-ba36-7dafc68b8150',
  keycloakPublicKey:
    KEYCLOAK_PUBLIC_KEY ||
    'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA366Bk5JRjK0c4H07+5VM4H5kn7SfSOjmonVUgSwxYQa/6qw9U+lRN4rqhfDkSAj6FrUh06NMDu8f1DWGqoh13bVmBFKDcVBmtZUnFzA6+mAIVZ5FSmdfQIwDYlqmSFq6Up1kq5rczIWOoFSsl3fKzL1VZ/mtdrPsNLoG29JDWIXB7YtzJLrjXY3SWP3GLRVSqYhnbCDhvwTg+EM0zLPsw9XqEyX7ZkBRvVNJ3JzNmXL0+ET7eC+XZzIWGeKW4EGYBI9UJ0Jeg7ivL94vjH1EOtQZmWsyyqdLYd1kH9Iw7jrp7NhKJrtaxnvq8HImi2fUhYHQKVj3V/352ltMNdACTwIDAQAB',
};
