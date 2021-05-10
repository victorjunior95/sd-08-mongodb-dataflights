db.voos
  .find({ rtk: { $exists: false } }, { _id: false, vooId: true })
  .limit(1);

//   db.voos
//   .findOne({ rtk: { $exists: false } }, { _id: false, vooId: true });
