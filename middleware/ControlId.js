const fs = require('fs')

// araba verilerini al
let cars = JSON.parse(fs.readFileSync(`${__dirname}/../data/cars.json`,'utf-8'))

module.exports = (req,res,next) => {
    // isteğe parametre olarak gelen id'li elemanı diziden al
    const found = cars.find((car) => car.id === req.params.id)

    // eğerki eleman bulunamadıysa bunu bulunamadı olarak yazdır
    if(!found) return res.status(404).json({message:'aradığınız id li eleman yok'})

    // sonraki adımda found'a erişebilimek için isteğe ekle
    req.car = found

    // id geçerliyse bir sonraki controller fonksiyona geç
    next()
}