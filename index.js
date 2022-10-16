const express = require("express");
const Gun = require("gun");

const app = express();
const port = 8000;
app.use(Gun.serve);

const server = app.listen(port, () => {
  console.log("Listening at: http://localhost://" + port);
});

var gun = Gun({ web: server });

gun.get("incidents").put({
  id: "1",
  title: "test",
  description: "test",
  location: { latitude: 30.286489, longitude: -97.736718 },
  image: "test",
  date: "test",
});

gun.get("incidents").once((data) => {
  console.log(data);
});
