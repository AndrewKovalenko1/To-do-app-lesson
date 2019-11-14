(function () {
  

  let express = require('express');
      var app = express();
      var host = 'localhost';
      var port = 3000;
  app.use(express.static(__dirname));
  app.listen(port, host, () => {
      console.log('Server running on: ' + host + ':' + port);
  });
}());
