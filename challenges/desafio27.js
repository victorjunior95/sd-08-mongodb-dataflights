const aEmpresa = "PASSAREDO";
const aQuantidade = db.voos.count({ "empresa.nome": aEmpresa, natureza: "Doméstica" });
db.resumoVoos.insertOne({ 
    empresa: aEmpresa,
totalVoosDomesticos: aQuantidade });
db.resumoVoos.find({ empresa: aEmpresa }, { _id: 0, empresa: 1, totalVoosDomesticos: 1 }).limit(1);