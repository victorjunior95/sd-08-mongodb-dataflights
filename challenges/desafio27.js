db.resumoVoos.insertOne({
    empresa: "PASSAREDO",
    totalVoosDomesticos: db.voos.find({
      "empresa.nome": "PASSAREDO",
      natureza: "Doméstica",
    }).count(),
  });
 // inserção dos dados de voos domesticos da empresa PASSAREDO 
 // (nome da empresa, e total de voos domésticos)
 // na coleção de dados resumoVoos.
 // https://docs.mongodb.com/manual/reference/method/db.collection.insertOne/
 // consultei o repositorio de Arnaelcio para esta parte
 // https://github.com/tryber/sd-08-mongodb-dataflights/pull/85/files

  db.resumoVoos.find(
    { empresa: "PASSAREDO" },
    { _id: 0, empresa: 1, totalVoosDomesticos: 1 },
  );
