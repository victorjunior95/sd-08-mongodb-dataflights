db.voos.find(
  {
    "aeroportoDestino.continente":
    {
      $nor:
      [
        { $eq: "EUROPA" },
        { $eq: "ÁSIA" },
        { $eq: "OCEANIA" },
      ],
    },
  },
  ).count();
