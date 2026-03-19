import { Sequelize } from "sequelize";

const sequelize = new Sequelize('Book_Store', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

const testDbConnection = async () => {
  try { 
    await sequelize.authenticate();
    console.log('✅ Connection has been established successfully.');
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error.message);
  }
};
testDbConnection()

export default sequelize

