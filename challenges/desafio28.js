const latamAirLinesBrasil = "LATAM AIRLINES BRASIL";
db.resumoVoos.insertOne({ 
    empresa: latamAirLinesBrasil,
    totalVoosDomesticos: db.voos
        .count({
            "empresa.nome": latamAirLinesBrasil,
            natureza: "Doméstica",
        }),
});
db.resumoVoos.findOne(
    { empresa: latamAirLinesBrasil },
    { _id: 0, empresa: 1, totalVoosDomesticos: 1 },
);