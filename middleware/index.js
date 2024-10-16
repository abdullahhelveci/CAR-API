exports.logger = (req, res, next) => {
  console.log("istek geldi method:", req.method + " URL:" + req.url);
  // arayazılımdan sonra çalışacak olan fonksiyon çalışsın
  next();
};
