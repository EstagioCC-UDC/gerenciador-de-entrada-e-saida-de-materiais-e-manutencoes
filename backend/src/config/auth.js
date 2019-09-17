const {
  KEYCLOAK_BASE_URL,
  KEYCLOAK_REALM,
  KEYCLOAK_TOKEN_PATH,
  KEYCLOAK_CLIENT_ID,
  KEYCLOAK_LOGOUT_PATH,
} = process.env;

export default {
  keycloakBaseUrl: KEYCLOAK_BASE_URL || 'http://localhost:8080/auth/realms',
  keycloakRealm: KEYCLOAK_REALM || 'dev',
  keycloakTokenPath: KEYCLOAK_TOKEN_PATH || 'protocol/openid-connect/token',
  keycloakClientId: KEYCLOAK_CLIENT_ID || 'gesmm',
  keycloakLogoutPath: KEYCLOAK_LOGOUT_PATH || 'protocol/openid-connect/logout',
};
