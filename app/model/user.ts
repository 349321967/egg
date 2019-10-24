
import { DataTypes } from 'sequelize';

module.exports = app => {

    const User = app.model.define('users', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: null,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null,
            primaryKey: false,
        },
        pwd: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null,
            primaryKey: false,
        },
        create_time: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: null,
            primaryKey: false,
        },
    }, {
        // don't forget to enable timestamps!
        timestamps: false,
      
        // I don't want createdAt
        createdAt: false,
        updatedAt: false,
        deletedAt: false,
      
        // // I want updatedAt to actually be called updateTimestamp
        // updatedAt: 'updateTimestamp',
      
        // // And deletedAt to be called destroyTime (remember to enable paranoid for this to work)
        // deletedAt: 'destroyTime',
        paranoid: false,
      });

    return User;
};
