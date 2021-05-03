// Conte quantos voos da empresa LATAM AIRLINES BRASIL cujo campo natureza possua valor igual a Doméstica e crie uma query que insira na coleção resumoVoos um documento com os campos: empresa (nome da empresa) e totalVoosDomesticos (o total retornado anteriormente).
// Em uma segunda query, retorne a empresa e o totalVoosDomesticos do primeiro documento presente na coleção resumoVoos em que a empresa seja LATAM AIRLINES BRASIL.
const nomeEmpresa = "LATAM AIRLINES BRASIL";
db.resumoVoos.insertOne(
  {
    empresa: nomeEmpresa,
    totalVoosDomesticos: db.voos.countDocuments(
      { 
        "empresa.nome": nomeEmpresa,
        natureza: "Doméstica",
      },
    ),
  },    
);
db.resumoVoos.findOne({ empresa: nomeEmpresa }, { _id: 0, empresa: 1, totalVoosDomesticos: 1 });
