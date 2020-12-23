module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'User',
        {
            email: {
                type:DataTypes.STRING(30),
                allowNull : false,
                primaryKey:true,
            },
            name: {
                type:DataTypes.STRING(30),
                allowNull:false,
            },
            password: {
                type:DataTypes.STRING(100),
                allowNull:false,
            },
            nickname: {
                type:DataTypes.STRING(30),
                allowNull : false,
            }

        },
        {
            charset: 'utf8',
            collate: 'utf8_general_ci',
            timestamps:false,
            tableName:'user',
        }
    )};
