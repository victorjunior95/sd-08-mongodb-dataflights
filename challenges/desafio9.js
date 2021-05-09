// 9 - Retorne a quantidade de voos entre os anos de 2017 e 2018.
db.voos.find({ ano: { $gt: 2016, $lt: 2019 } }).count();