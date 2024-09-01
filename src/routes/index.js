const { Router } = require("express");

const router = Router();

router.get("/users", (req, res) => {
  res.json({
    name: "Sakib",
    age: "23",
  });
});

router.post("/users", (req, res, next) => {
  try {
    const { name, age } = req.body;
    if (!name || !age) {
      throw new Error("Name and age are required");
    }
    res.json({ message: "User created successfully" });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
