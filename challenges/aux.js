const fs = require("fs");

for (let i = 1; i <= 28; i++) {
  fs.writeFileSync(`desafio${i}.js`, "");
}
