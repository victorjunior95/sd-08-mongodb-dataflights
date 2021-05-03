db.voos.find({ $and: [{ ano: { $gte: 2016 } }, { ano: { $lte: 2016 } }] }).count();
