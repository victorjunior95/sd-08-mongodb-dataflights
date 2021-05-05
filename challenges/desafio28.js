const nomeEmpresa = "LATAM AIRLINES BRASIL";

db.resumoVoos.insert({
  empresa: nomeEmpresa },
  { totalVoosDomesticos: db.voos.find({ $and:
    [{ "empresa.nome": nomeEmpresa }, { natureza: "Doméstica" }] }).count() });

db.resumoVoos.findOne({ empresa: nomeEmpresa },
{ _id: false, empresa: true, totalVoosDomesticos: true });
