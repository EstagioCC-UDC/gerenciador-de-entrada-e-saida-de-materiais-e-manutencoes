export default {
  development: {
    backendUrl: process.env.REACT_APP_BACKEND_URL || 'http://localhost:3333',
  },
  test: {
    backendUrl: 'http://localhost:3333',
  },
};
