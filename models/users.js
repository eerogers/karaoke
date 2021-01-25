module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_name: DataTypes.STRING,
        password: DataTypes.STRING //,
    //    playlists: DataTypes.INTEGER
    })
    return User;
}