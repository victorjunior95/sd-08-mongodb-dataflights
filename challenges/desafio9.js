// Retorne a quantidade de voos entre os anos de 2017 e 2018.
db.voos.countDocuments({ ano: { $in: [2017, 2018] } });
