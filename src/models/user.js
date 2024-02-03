import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../database/sequelize.js";


const User = sequelize.define("User", {
    name: {
        type:DataTypes.STRING
    },
    lastname: {
        type: DataTypes.STRING
    }
});


export default User