db.voos.find(
    { decolagens: { $gt: 20 } },
        { _id: 0 },
        ).count();