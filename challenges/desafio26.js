db.voos.deleteMany({ "empresa.nome": "GOL", "passageiros.pagos": { $in: [5, 6, 7, 8, 9, 10] } });
