db.voos.find({ 'aeroportoDestino.pais': { $in: ['BRAZIL', 'ARGENTINA', 'CHILE'] } }).count();
