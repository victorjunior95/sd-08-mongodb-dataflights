// 11 - Retorne a quantidade de documentos em que o campo aeroportoDestino.pais não seja igual a ESTADOS UNIDOS.
db.voos.count({ "aeroportoDestino.pais": { $ne: "ESTADOS UNIDOS" } });
