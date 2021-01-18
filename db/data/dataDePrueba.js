const db = require("..");

//Datos de ejemplo para el chatbot auditor - Poblado de tablas cuestionarios y preguntas

let cuestionarios = ["Cuestionario de Prueba"];

let preguntas = ["Pregunta de prueba"];

cuestionarios.forEach((cuestionario) => {
  db.query(
    `insert into cuestionarios(nombre) values('${cuestionario}')`,
    (err, res) => {
      if (err) {
        return console.log(err);
      }
      console.log("Se terminó de poblar la tabla cuestionarios", res.rows);
    }
  );
});

preguntas.forEach((pregunta, index) => {
  db.query(
    `insert into preguntas(pregunta,orden,id_cuestionario) values('${pregunta}',${
      index + 1
    },2)`,
    (err, res) => {
      if (err) {
        return console.log(err);
      }
      console.log("Se terminó de poblar la tabla preguntas", res.rows);
    }
  );
});
