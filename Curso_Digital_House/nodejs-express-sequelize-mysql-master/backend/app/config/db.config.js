module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "Isr@el01",
  DB: "db_teste",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
