db.voos.find({
  'aeroportoDestino.continente': {
    $not: {
      $in: ['EUROPA', 'ASIA', 'OCEANIA'],
    },
  },
}).count();