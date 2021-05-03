// Retorne a quantidade de documentos em que o campo aeroportoDestino.pais não seja igual a ESTADOS UNIDOS.
db.voos.countDocuments({ "aeroportoDestino.pais": { $ne: "ESTADOS UNIDOS" } });
