const CatModel = require('./cats');
const Sequelize = require('sequelize');

const setUpDatabase = () => {
    const connection = new Sequelize("have_i_fed_the_cat_app", "postgres", "supersecret", {
    host: "localhost",
    port: 5433,
    dialect: "postgres"
    });
    const Cat = CatModel(connection, Sequelize);
    connection.sync({alter: true});

  return {Cat}
};

module.exports = setUpDatabase();