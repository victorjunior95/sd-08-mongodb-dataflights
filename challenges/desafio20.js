db.voos.find(
  { rtk: { $exists: false } },
  { vooId: 1, _id: 0 },
).sort({ ano: 1 }).limit(1);
