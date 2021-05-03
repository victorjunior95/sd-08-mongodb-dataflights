db.voos.find({ $and: [{ "empresa.nome": "GOL" }, { ano: 2017 }] }, 
{ vooId: 1,
"empresa.nome": 1,
_id: 0,
"aeroportoOrigem.nome": 1, 
"aeroportoDestino.nome": 1,
mes: 1,
ano: 1 }).limit(10);
