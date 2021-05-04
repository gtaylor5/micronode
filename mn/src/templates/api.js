const express = require('express');
const router = express.Router();

// Define Routes Here:

// CREATE
router.post("/", (req, res) => {
   const { body } = req;
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