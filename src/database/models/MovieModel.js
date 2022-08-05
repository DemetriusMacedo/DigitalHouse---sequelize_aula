const { DataTypes } = require("sequelize");

const sequelize = require("../config");

const Genre = sequelize.define(
  "Movie",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      field: "created_at",
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: "updated_at",
    },
    title: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.INTEGER,
    },
    awards: {
      type: DataTypes.INTEGER,
    },
    releaseDate: {
      type: DataTypes.DATE,
      field: "release_date",
    },
    length: {
      type: DataTypes.INTEGER,
    },
    genreId: {
      type: DataTypes.INTEGER,
      field: "genre_id",
    }, 
   
  },
  {
    tableName: "movies",
    timestamps: true,
    createdAt: "createdAt",
    updatedAt: "updatedAt",
  }
);

module.exports = Genre;