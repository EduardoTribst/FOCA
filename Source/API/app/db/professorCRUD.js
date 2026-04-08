
const db = require('../../config/dbConfig');

// database acess logic

class ProfessorCRUD {

  constructor() {
    this._db = db.getConnection();
  }

  professorLogin() {
    return new Promise((resolve, reject) => {
      try{
        
      }
      catch(error){
        reject(error);
      }
    });
  }

  listProfessors() {
    return new Promise((resolve, reject) => {
      try {
        let recordset = [{
          a: "b",
          b: "a"
        }];
        resolve(recordset);
      }
      catch(error){
        reject(error);
      }
      
    });
  }


}

module.exports = ProfessorCRUD;