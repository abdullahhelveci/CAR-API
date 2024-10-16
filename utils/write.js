const fs = require('fs')
// parametre olarak gelen araç verilerini json dosyasına yazar

module.exports = (cars) => {
  fs.writeFile(
    `${__dirname}/../data/cars.json`,
    JSON.stringify(cars),
    (err) => {
      if (err) {
        console.log("dosyayı güncellerken bir hata oluştu", err);
      }
      return;
    }
  );
};
