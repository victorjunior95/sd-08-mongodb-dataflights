const LATAM_AIRLINES_BRASIL = 'LATAM AIRLINES BRASIL';

db.resumoVoos.insertOne({
  empresa: '',
  totalVoosDomesticos: db.voos.find({ $and: [
    { 'empresa.nome': LATAM_AIRLINES_BRASIL },
    { natureza: 'Doméstica' },
  ] }).count(),
});

db.resumoVoos.find({ empresa: 'LATAM AIRLINES BRASIL' }, { _id: 0 }).limit(1);
