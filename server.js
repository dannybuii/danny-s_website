let express = require("express");
let app = express();

let port = process.env.PORT || 8000;

app.use(express.static(__dirname));

app.get("/", function (req, res) {
  res.render("index");
});

app.listen(port, function () {
  console.log("app running");
});
