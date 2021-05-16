db.voos
  .find({ litrosCombustivel: { $exists: true } }, { _id: false, vooId: true })
  .limit(1);
  // https://docs.mongodb.com/manual/reference/operator/query/exists/
  // Syntax: { field: { $exists: <boolean> } }
  // consultei o repositório de Arnaelcio
  // https://github.com/tryber/sd-08-mongodb-dataflights/pull/85/files