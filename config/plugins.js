module.exports = ({ env }) => ({
  // JWT configuration
  'users-permissions': {
    config: {
      jwt: {
        expiresIn: '7d',
      },
    },
  },
});