db.voos.find({}, { vooId: 1, _id: 0 }).limit(12).skip(9);
