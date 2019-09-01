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
        database:"report_deck_dev",
        dialect: "mysql",
        operatorsAliases:false
    },
    production: {
        username : "dymspuvvuznowg",
        password : "5d922a9590ae71f0da5d55c2ab3ad034fbf5169bd9c4e0c3be81832713e3eda0",
        port:5432,
        host :"ec2-54-235-180-123.compute-1.amazonaws.com",
        database: "d93o9gq5ogq04v",
        dialect: "postgres",
        dialectOptions:{
            ssl:true
        },
        operatorsAliases: false
    }
   
}