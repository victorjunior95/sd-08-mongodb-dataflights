// 21 - Retorne o vooId do primeiro voo em que o campo litrosCombustivel seja maior ou igual a 1000.
db.voos.find({ litrosCombustivel: { $gte: 1000 } }, { _id: 0, vooId: 1 }).limit(1);
