const fs = require("fs");

fs.readFile("animes.json", (err, data) => {
  if (err) throw err;
  const animeList = JSON.parse(data);
  const duplicates = [];
  for (let i = 1; i < animeList.length; i++) {
    for (let j = i + 1; j < animeList.length; j++) {
      if (
        (animeList[i].idMAL === animeList[j].idMAL ||
          animeList[i].idAnilist === animeList[j].idAnilist) &&
        !duplicates.includes(animeList[i])
      ) {

        if (animeList[i].idMAL != undefined && animeList[i].idMAL != null && animeList[i].idAnilist != undefined && animeList[i].idAnilist != null) {
          duplicates.push(animeList[i].id + " : " + animeList[j].id);
          console.log("doublon trouver");
        }
      }
    }

  }

  console.log(duplicates);
});
