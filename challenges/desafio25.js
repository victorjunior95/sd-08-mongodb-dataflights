use("dataFlights");

db.voos.find(
{ 
  "empresa.nome": "AZUL",
  litrosCombustivel: { $lt: 400 },
},
);

db.voos.deleteMany(
  { 
    "empresa.nome": "AZUL",
    litrosCombustivel: { $lt: 400 },
  },
);
