db.voos.find({ rtk: { $exists: false } }, {
  vooId: true }).limit(1);
