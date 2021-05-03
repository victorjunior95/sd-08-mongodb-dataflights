// Retorne o total de voos em que o país de origem não seja BRASIL.
db.voos.countDocuments({ "aeroportoOrigem.pais": { $ne: "BRASIL" } });
