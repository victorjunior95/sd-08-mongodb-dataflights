db.voos.find(
  {
    "aeroportoDestino.pais":
    {
      $or:
      [
        { $eq: "BRASIL" },
        { $eq: "ARGENTINA" },
        { $eq: "CHILE" },
      ],
    },
  },
  ).count();
