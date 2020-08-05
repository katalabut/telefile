const express = require("express");
const router = express.Router();
const telegram = require("../telegram");

router.get("/:id", function(req, res) {
  const {id} = req.params;
  telegram.getFile(id).pipe(res);
});

module.exports = router;
