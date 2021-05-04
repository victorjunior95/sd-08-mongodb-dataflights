const empresa = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne({ empresa,
                          totalVoosDomesticos: db.voos.count(
                          {
                          "empresa.nome": empresa,
                          natureza: "Doméstica",
                          },
                          ),
                        });

db.resumoVoos.find({ empresa }, { _id: 0 });
