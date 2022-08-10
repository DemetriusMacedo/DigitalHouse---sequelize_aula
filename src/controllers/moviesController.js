const { Op } = require("sequelize");
const movieModel = require("../database/models/MovieModel");

const moviesController = {
  index: async (request, response) => {
    // SELECT * FROM movies;
    // const movies = await movieModel.findAll();
    const movies = await movieModel.findAll();
    // console.log(movies);

    response.render("moviesList", { movies });
  },
  show: async (request, response) => {
    const { id } = request.params;

    const movie = await movieModel.findByPk(id);
    // const movie = await movieModel.findOne({
    //   where: {
    //     awards: {
    //       [Op.or]: [3, 11],
    //     },
    //   },
    // });

    response.render("moviesDetail", { movie: movie });
  },
  addMovieScreen:  async(request, response) => {
    response.render("moviesAdd");
  },
  add: async(request, response) => {

  },

  edit: async(request, response) => {

  },

  delete: async(request, response) =>{
    const { id } = request.params;

    const movie = await movieModel
  },
};

module.exports = moviesController;
