export const VIEW = 'VIEW';
export const MANIPULATE = 'MANIPULATE';

/**
 * Object contains the 'path' and 'type' attributes, meaning which type of access it has
 */
export default {
  USER: [
    {
      path: '/materiais',
      type: VIEW,
    },
  ],
  VIEWER: [
    {
      path: '/materiais',
      type: VIEW,
    },
  ],
};
