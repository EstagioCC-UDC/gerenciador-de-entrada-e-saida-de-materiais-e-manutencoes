const { FRONTEND_CORS_URL } = process.env;

export default {
  frontendCorsUrl: FRONTEND_CORS_URL || '*/*',
};
