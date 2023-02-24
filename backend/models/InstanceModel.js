import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Instances = db.define('instances',{
    sap_customer_name:{
        type: DataTypes.STRING
    },
    sap_customer_num:{
        type: DataTypes.STRING
    },
    contact_person:{
        type: DataTypes.STRING
    },
    contact_email:{
        type: DataTypes.STRING
    },
    national:{
        type: DataTypes.STRING
    },
    service:{
        type: DataTypes.STRING
    },
    project_name:{
        type: DataTypes.STRING
    },
    admin_name:{
        type: DataTypes.STRING
    },
    distric_num:{
        type: DataTypes.STRING
    },
    can_num:{
        type: DataTypes.STRING
    },
    atvise_connect:{
        type: DataTypes.STRING
    },
    vpn:{
        type: DataTypes.STRING
    },
    customer_name:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    address:{
        type: DataTypes.STRING
    },
    address_2:{
        type: DataTypes.STRING
    },
    county:{
        type: DataTypes.STRING
    },
    federal_state:{
        type: DataTypes.STRING
    },
    postcode:{
        type: DataTypes.STRING
    },
    active:{
        type: DataTypes.STRING
    }
},{
    freezeTableName:true
});

export default Instances;