const express = require("express");
const app = express();
app.use(express.json());

const { router } = require("./api/api");
const port = process.env.PORT || 8000;
const serviceName = SERVICE_NAME_HERE

app.use(`/api/${serviceName}`, router);
app.listen(port, async () => {
  console.log(`${serviceName} Service is listening on Port: ${port}`);
});