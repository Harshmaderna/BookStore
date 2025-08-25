import  Sequelize  from "sequelize";

const sequelize = new Sequelize('BookStore', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

const data = async () => {
    try {
        await sequelize.authenticate();
        console.log('mysql connection running successfully')
    } catch (error) {
        console.error('Unable to connect database:', error)
    }
}
data()


export default sequelize;