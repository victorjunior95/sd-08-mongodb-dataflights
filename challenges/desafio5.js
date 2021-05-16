db.voos.find({}, { vooId: 1, _id: 0 }).skip(9).limit(3);
// é sempre necessario exluir o id gerado pelo mongo da busca, caso não o queira ver
// consultei o repositório de Arnaelcio 
// https://github.com/tryber/sd-08-mongodb-dataflights/pull/85/files
