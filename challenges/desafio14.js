db.voos.find(
    { "aeroportoOrigem.pais": { $ne: "BRASIL" } },
        { _id: 0 },
        ).count();