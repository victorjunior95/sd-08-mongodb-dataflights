db.resumoVoos.insertOne({ empresa: "LATAM AIRLINES BRASIL", totalVoosDomesticos: db.voos.count({ $and: [{ "empresa.nome": "LATAM AIRLINES BRASIL" }, { natureza: "Doméstica" }] }) });

db.resumoVoos.find({ empresa: "LATAM AIRLINES BRASIL" }, { empresa: 1, totalVoosDomesticos: 1, _id: 0 });
