import Command from "@oclif/command";

const fs = require("fs");
const path = require("path");
const { execSync } = require('child_process');

export default class DirUtils extends Command {

  createApi = (baseDir: string, serviceName: string) => {
    this.log("Initializing API...");
    const API = "api";
    const apiPath = path.join(baseDir, API);
    fs.mkdirSync(apiPath);
    const writeStream = fs.createWriteStream(path.join(apiPath, "api.js"));
    const apiFileContents = `const express = require('express');
const router = express.Router();

// Define Routes Here:

// CREATE
router.post("/", (req, res) => {
  const body = req.body;
  res.status(200).send("Response from Post Request");
})

// READ
router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).send("Getting Data for: " + id);
});

// UPDATE
router.put("/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).send("Updating Data for: " + id);
});

// DELETE
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).send("Deleting data for: " + id);
})

module.exports = { router };
  `;
    writeStream.write(apiFileContents.replace(/^[ ]+|[ ]+$/g, ""));
    writeStream.end();
  };

  createIndex = (baseDir: String, serviceName: String) => {
    this.log("Creating index.js ...");
    const writeStream = fs.createWriteStream(path.join(baseDir, "index.js"));
    const contents = `const express = require("express");
const { router } = require("./api/api");

const port = process.env.PORT || 8000;
const app = express();
app.use(express.json());

app.use("/api/${serviceName}", router);
app.listen(port, async () => {
  console.log('${serviceName} Service is listening on Port', port);
});
  `;

    writeStream.write(contents);
    writeStream.end();
  };

  createDockerfile = (baseDir: String,) => {
    this.log("Creating Dockerfile...");
    const writeStream = fs.createWriteStream(path.join(baseDir, "Dockerfile"));
    const contents = `FROM node:14

# Create app directory
WORKDIR /usr/src

# Copy dependent libraries
COPY package*.json ./

# Install deps
RUN npm install

# Copy Service
COPY . .

CMD [ "node", "app" ]
  `;

    writeStream.write(contents);
    writeStream.end();

  }

  initializeNodeProject = (dir: String) => {
    const baseString = `npm --prefix=${dir} `
    const commands = [{
      cmd: 'init -y',
      msg: 'Initializing Node Project'
    }, { cmd: 'install express', msg: 'Installing Dependencies' }]
    commands.forEach(cmd => {
      this.log(cmd.msg);
      execSync(`${baseString}` + cmd.cmd);
    })
  }

  build = (baseDir: string, serviceName: string) => {
    const dir = path.join(baseDir, serviceName);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
      this.createApi(dir, serviceName);
      this.createIndex(dir, serviceName);
      this.createDockerfile(dir);
      this.initializeNodeProject(dir);
    }
  };

  async run() {
    
  }
}