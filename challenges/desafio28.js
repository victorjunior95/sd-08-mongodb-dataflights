const LATAM = 'LATAM AIRLINES BRASIL';

db.resumoVoos.insertOne({
  empresa: LATAM,
  totalVoosDomesticos: db.voos.count({
    $and: [{ 'empresa.nome': LATAM }, { natureza: 'Doméstica' }] }) });

db.resumoVoos.findOne({ empresa: LATAM }, { empresa: 1, totalVoosDomesticos: 1, _id: 0 });
