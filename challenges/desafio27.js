db.resumoVoos.insertOne({
    empresa: "PASSAREDO",
    totalVoosDomesticos: db.voos
        .count({ "empresa.nome": "PASSAREDO", natureza: "Doméstica" }),
});
db.resumoVoos.findOne(
    { empresa: "PASSAREDO" }, 
    { _id: 1, empresa: 1, totalVoosDomesticos: 1 },
);