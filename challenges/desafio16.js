db.voos.find(
    { natureza: "Internacional" },
        { _id: 0 },
        ).count();