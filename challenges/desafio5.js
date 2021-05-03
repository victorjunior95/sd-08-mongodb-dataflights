db.voos.find({}, { _id: 0, vooId: 1 }).limit(1).skip(11);
