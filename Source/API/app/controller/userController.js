
const ProfessorCRUD = require('../db/professorCRUD');
const InstituicaoCRUD = require('../db/instituicaoCRUD');

// handles methods that are from PROFESSOR and from INSTITUICAO at the same time. Login, for example.

class UserController{

  listAllProfessors = 
    async (req, res) =>{
      const professorCRUD = new ProfessorCRUD();
      professorCRUD.listProfessors()
      .then((recordset) => res.status(200).json(recordset))
      .catch((erro) =>{
        console.log(erro);;
        res.status(500).send();
      });
    }
  
}

module.exports = ProfessorController;
