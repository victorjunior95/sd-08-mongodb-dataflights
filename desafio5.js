// 5 - Retorne o vooId do décimo ao décimo segundo documento da coleção voos.
db.voos.find({}, { vooId: 1 }).skip(10).limit(2);
