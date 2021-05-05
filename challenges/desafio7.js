db.voos.find({ ano: { $lt: 2017 } }, { _id: 0 }).count();
