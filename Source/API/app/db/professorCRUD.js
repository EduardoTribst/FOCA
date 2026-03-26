
const db = require('../../config/dbConfig');

class ProfessorCRUD {

  constructor() {
    this._db = db.getConnection();
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
      catch{
        reject("Mensagem de erro");
      }
      
    });
  }
}

module.exports = ProfessorCRUD;