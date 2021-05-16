db.voos.find({ ano: { $lt: 2017 } }).count();
// uso do "less than" : https://docs.mongodb.com/manual/reference/operator/query/lt/
// sintax: Syntax: {field: {$lt: value} }
