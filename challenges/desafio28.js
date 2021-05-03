const latam = "LATAM AIRLINES BRASIL";

db.resumoVoos.insert({ empresa: latam,
totalVoosDomesticos: db.voos.count({ $and: [{ "empresa.nome": latam },
{ natureza: "Doméstica" }] }) });

db.resumoVoos.find({ empresa: latam },
{ empresa: 1, totalVoosDomesticos: 1, _id: 0 }).limit(1);
