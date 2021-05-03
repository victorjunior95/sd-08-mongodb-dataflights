// Conte quantos voos da empresa PASSAREDO cujo campo natureza possua valor igual a Doméstica e crie uma query que insira na coleção resumoVoos um documento com os campos: empresa (nome da empresa) e totalVoosDomesticos (o total retornado anteriormente).
// Em uma segunda query, retorne a empresa e o totalVoosDomesticos do primeiro documento presente na coleção resumoVoos em que a empresa seja PASSAREDO.
db.resumoVoos.insertOne(
    {
      empresa: "PASAREDO",
      totalVoosDomesticos: db.voos
        .countDocuments({ "empresa.nome": "PASSAREDO", natureza: "Doméstica" }),
    },    
);
db.resumoVoos.findOne({ empresa: "PASSAREDO" });
