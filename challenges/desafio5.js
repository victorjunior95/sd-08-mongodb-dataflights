db.voos.find({}, { vooId: 1, _id: 0 }).skip(11).limit(1);
