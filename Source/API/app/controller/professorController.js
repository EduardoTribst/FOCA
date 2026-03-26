
const ProfessorCRUD = require('../db/professorCRUD');

class ProfessorController{

  listAllProfessors(){
    return async function(req, res){
      const professorCRUD = new ProfessorCRUD();
      professorCRUD.listProfessors()
      .then((recordset) => res.status(200).json(recordset))
      .catch((erro) =>{
        console.log(erro);;
        res.status(500);
      });
    }
  }
}

module.exports = ProfessorController;
