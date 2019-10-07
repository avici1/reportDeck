require('dotenv').config();
module.exports ={
    // development :{
    //    username:"huoadgct",
    //    password:"SW73Z8MH75ICDZLX22CRML-5yDIQXkEU",
    //    host:"raja.db.elephantsql.com",
    //    database:"huoadgct",
    //    dialect:"postgres",
    //    operatorsAliases: false
    // },
    development :{
        username:"report_deck",
        password:"nAdia123",
        host:"localhost",
        port:"3305",
        database:"report_deck_dev",
        dialect: "mysql",
        operatorsAliases:false
    },
    production: {
      use_env_varible : process.env.DATABASE_URL,
      dialect : 'postgres'
    }
   
};