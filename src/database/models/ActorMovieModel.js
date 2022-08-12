const { DataTypes } = require("sequelize");

const sequelize = require("../config");

const ActorMovie = sequelize.define(
  "ActorMovie",
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
    actorId: {
      type: DataTypes.INTEGER,
      field: "actor_id",
    },
    movieId: {
      type: DataTypes.INTEGER,
      field: "movie_id",
    }
  },
  {
    tableName: "actor_movie",
    timestamps: true,
    createdAt: "createdAt",
    updatedAt: "updatedAt",
  }
  );

  module.exports = ActorMovie;