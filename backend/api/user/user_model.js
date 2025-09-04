import sequelize from "../../config/db.js";
import { DataTypes } from "sequelize";

const user = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: { 
    type: DataTypes.STRING,
    allowNull: false,
  },
});

 export default user;
