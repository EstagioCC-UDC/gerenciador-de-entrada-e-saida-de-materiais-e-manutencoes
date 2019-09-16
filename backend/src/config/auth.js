const {
  KEYCLOAK_BASE_URL,
  KEYCLOAK_REALM,
  KEYCLOAK_TOKEN_PATH,
  KEYCLOAK_CLIENT_ID,
  KEYCLOAK_LOGOUT_PATH,
} = process.env;

export default {
  keycloakBaseUrl: KEYCLOAK_BASE_URL,
  keycloakRealm: KEYCLOAK_REALM,
  keycloakTokenPath: KEYCLOAK_TOKEN_PATH,
  keycloakClientId: KEYCLOAK_CLIENT_ID,
  keycloakLogoutPath: KEYCLOAK_LOGOUT_PATH,
};
