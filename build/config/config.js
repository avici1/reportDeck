"use strict";

require('dotenv').config();

module.exports = {
  development: {
    use_env_variable: 'dev_url',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'production_url',
    dialect: 'postgres'
  }
};
//# sourceMappingURL=config.js.map