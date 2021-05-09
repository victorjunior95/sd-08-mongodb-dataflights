let counter = db.voos.count({ 'empresa.nome': 'LATAM AIRLINES BRASIL', 'natureza': 'Doméstica' });

db.resumoVoos.insertOne({ 'empresa': 'LATAM AIRLINES BRASIL', 'totalVoosDomesticos': counter });

db.resumoVoos.findOne({}, { '_id': 0 });