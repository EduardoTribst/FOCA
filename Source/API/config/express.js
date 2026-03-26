const express = require("express");
const app = express();

const professorRoutes = require('../app/routes/professorRoutes');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('professor', professorRoutes);

module.exports = app;