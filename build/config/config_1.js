"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require('dotenv').config();

var _default = {
  "development": {
    "username": "rooter",
    "password": "83lK3PwPS3UcM8iw",
    "database": "report_deck_dev",
    "host": "localhost",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  // "test": {
  //   "username": "root",
  //   "password": null,
  //   "database": "database_test",
  //   "host": "127.0.0.1",
  //   "dialect": "mysql",
  //   "operatorsAliases": false
  // },
  "test": {
    "use_env_variable": "DATABASE_TEST_URL"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  }
};
exports["default"] = _default;
//# sourceMappingURL=config_1.js.map