db.voos.deleteMany({
    $and: [{ "empresa.nome": "AZUL" }, { litrosCombustivel: { $lt: 400 } }],
  });
// https://docs.mongodb.com/manual/reference/method/db.collection.deleteMany/
/* db.collection.deleteMany(
    <filter>,
    {
       writeConcern: <document>, -> opcional.
       não usemos por enquanto, bastante complexo.
       collation: <document> -> opcional. Permite especificações de agrupamento.
       ex: collation: {
   locale: <string>,
   caseLevel: <boolean>,
   caseFirst: <string>,
   strength: <int>,
   numericOrdering: <boolean>,
   alternate: <string>,
   maxVariable: <string>,
   backwards: <boolean>
}

    }
 ) */
// consultei o repositorio de Arnaelcio 
// https://github.com/tryber/sd-08-mongodb-dataflights/pull/85/files
