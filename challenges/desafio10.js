db.voos.find({ "empresa.nome": "GOL", ano: { $eq: 2017 } }, { _id: 0, ano: 1, vooId: 1, "empresa.nome": 1, "aeroportoOrigem.nome": 1, "aeroportoDestino.nome": 1, mes: 1 }).limit(10);
