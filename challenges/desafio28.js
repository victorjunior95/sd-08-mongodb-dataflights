const empresa = "LATAM AIRLINES BRASIL";
const natureza = "Doméstica";
const totalVoosDomesticos = db.voos.count({ "empresa.nome": empresa, natureza });

db.resumoVoos.insertOne({ empresa, totalVoosDomesticos });
db.resumoVoos.find({ empresa }, { empresa: 1, totalVoosDomesticos: 1, _id: 0 }).limit(1);
