const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const apiRoutes = require("./src/Routes/api");

app.use("/", apiRoutes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
