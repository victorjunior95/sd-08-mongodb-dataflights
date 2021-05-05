db.voos.find(
    { "aeroportoDestino.continente": { $nin: ["EUROPA", "ÁSIA", "OCEANIA"] } },
        { _id: 0 },
        ).count();