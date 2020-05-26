const app = new require("express")();
const mongoose = require("mongoose");

mongoose.connect("mongodb://taggest:DrentheIsEenMythe@mongo/taggest", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.once("open", () => {
  app.listen(8080);
});

app.use("/api", require("./routes"));
