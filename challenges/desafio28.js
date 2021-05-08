const company = "LATAM AIRLINES BRASIL";
const totalVoosLatam = db.voos.count({
  $and: [{ "empresa.nome": company }, { natureza: "Doméstica" }],
});
db.resumoVoos.insertOne({
  empresa: company,
  totalVoosDomesticos: totalVoosLatam,
});
db.resumoVoos
  .find(
    { empresa: company },
    { _id: 0, empresa: 1, totalVoosDomesticos: 1 },
  )
  .pretty();
