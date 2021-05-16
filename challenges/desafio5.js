db.voos.find({}, { vooId: 1, _id: 0 }).skip(9).limit(3);
// se colocasse apenas vooId: 1 ou vooId: true,
// a busca retornaria junto tudo que vem antes de vooId (_id nesse caso)
// consultei o repositório de Arnaelcio 
// https://github.com/tryber/sd-08-mongodb-dataflights/pull/85/files
