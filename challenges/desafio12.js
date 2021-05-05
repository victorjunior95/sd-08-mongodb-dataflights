db.voos.find(
    { "aeroportoDestino.pais": { $in: ["BRASIL", "ARGENTINA", "CHILE"] } },
        { _id: 0 },
        ).count();