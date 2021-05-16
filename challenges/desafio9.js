db.voos.find({ ano: { $in: [2017, 2018] } }).count();
// https://docs.mongodb.com/manual/reference/operator/query/in/#mongodb-query-op.-in
