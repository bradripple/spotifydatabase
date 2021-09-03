'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Song extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Song.belongsTo(models.Album, { foreignKey: 'albumId' });
      models.Song.belongsTo(models.Artist, { foreignKey: 'artistId' });
      models.Song.belongsToMany(models.User, { through: 'Playlist', foreignKey: 'songId'});
    }
  };
  Song.init({
    title: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    play: DataTypes.INTEGER,
    albumId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Song',
  });
  return Song;
};