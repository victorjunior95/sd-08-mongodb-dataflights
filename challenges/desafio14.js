db.voos.count({ "aeroportoOrigen.pais": { $not: { $eq: "BRASIL" } } });
