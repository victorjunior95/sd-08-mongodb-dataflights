db.voos
  .find(
    {
      $and: [
        { "empresa.nome": { $in: ["DELTA AIRLINES", "AMERICAN AIRLINES"] } },
        { "aeroportoOrigem.sigla": "SBGR" },
        { "aeroportoDestino.sigla": "KJFK" },
      ],
    },
    { _id: false, vooId: true },
  )
  .limit(1);
//  $and performs a logical AND operation on an array of one or more expressions 
// (e.g. <expression1>, <expression2>, etc.) 
// Syntax: { $and: [ { <expression1> }, { <expression2> } , ... , { <expressionN> } ] }
// https://docs.mongodb.com/manual/reference/operator/query/and/
// consultei o repositório de Arnaelcio Gomes
// https://github.com/tryber/sd-08-mongodb-dataflights/pull/85/files
