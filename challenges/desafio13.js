// Retorne a quantidade de documentos em que o campo aeroportoDestino.continente não seja igual a EUROPA, ÁSIA e OCEANIA.
db.voos.countDocuments({ 'aeroportoDestino.continente': { $nin: ['EUROPA', 'ÁSIA', 'OCEANIA'] } });
