db.voos.findOne({ $nor: [{ litrosCombustivel: { $gt: 600 } },
   { 'empresa.nome': 'GOL' }, { 'empresa.nome': 'AZUL' }, 
   { litrosCombustivel: { $exists: false } }] });
