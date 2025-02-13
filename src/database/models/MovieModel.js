const { DataTypes } = require("sequelize");

const sequelize = require("../config");

const Movie = sequelize.define(
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

Genre.hasMany(Movie,{
  as: 'movies',
  foreignKey: genreId,
});

Movie.belongsTo(Genre, {
  as: 'genre',
  foreignKey: 'genreId'
});

Movie.belongsToMany(Actor, { 
  through: 'ActorMovies',
  foreignKey: 'actorID' ,
});
// Movie.hasMany(Actor, {
//   as: 'actor',
//   foreignKey: 
// })

module.exports = Movie;

