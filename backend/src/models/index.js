import config from './../config';
import Sequelize from 'sequelize';
import path from 'path';
import {
    readdirSync
} from 'fs';

const {
    MYSQL
} = config;

const configMsql = {
    dialect: 'mysql',
    replication: {
        read: MYSQL.slave,
        write: MYSQL.master
    },
    charset: 'utf8_general_ci',
    timezone: '+0700',
    syncOnAssociation: false,
    dialectOptions: {
        multipleStatements: true
    },
    pool: {}
}
const db = {};
const sequelize = new Sequelize(MYSQL.databases, configMsql);

readdirSync(__dirname).filter((file) => {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
}).forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
})

Object.keys(db).forEach((modelName) => {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;