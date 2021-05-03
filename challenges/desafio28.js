const nomeDaEmpresa = "LATAM AIRLINES BRASIL";

const documento = {
  empresa: nomeDaEmpresa,
  totalVoosDomesticos: db.voos.find({
    $and: [
      { "empresa.nome": nomeDaEmpresa },
      { natureza: "Doméstica" },
    ],
    }).count(),
};

db.resumoVoos.insertOne(documento);

db.resumoVoos.find({
  empresa: nomeDaEmpresa,
}, {
  _id: 0,
  empresa: 1,
  totalVoosDomesticos: 1,
}).limit(1);