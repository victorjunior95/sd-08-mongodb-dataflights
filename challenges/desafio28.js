const LATAM_AIRLINES_BRASIL = "LATAM AIRLINES BRASIL";
const selectQuantity = db.voos.count({
     "empresa.nome": LATAM_AIRLINES_BRASIL, natureza: "Doméstica",
    });

db.resumoVoos.insertOne(
    { empresa: LATAM_AIRLINES_BRASIL,
    totalVoosDomesticos: selectQuantity,
},
);

db.resumoVoos.find({
    empresa: LATAM_AIRLINES_BRASIL,
}, { _id: 0 });
