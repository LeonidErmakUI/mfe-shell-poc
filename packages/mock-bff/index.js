const express = require("express");
const cors = require("cors");
const marineData = require("./data/marine-submissions.json");
const cyberData = require("./data/cyber-submissions.json");

const app = express();
app.use(cors());
app.use(express.json());

// User context — имитирует разных пользователей по query param ?user=
const USERS = {
  sarah: {
    userId: "sarah-01",
    name: "Sarah Chen",
    role: "underwriter",
    lobs: ["cyber"],
    defaultLob: "cyber",
    permissions: ["view", "action", "assign"],
  },
  james: {
    userId: "james-01",
    name: "James Mitchell",
    role: "underwriter",
    lobs: ["marine", "cyber"],
    defaultLob: "marine",
    permissions: ["view", "action", "assign"],
  },
  admin: {
    userId: "admin-01",
    name: "Admin User",
    role: "admin",
    lobs: ["marine", "cyber"],
    defaultLob: "marine",
    permissions: ["view", "action", "assign", "admin"],
  },
};

app.get("/api/user/context", (req, res) => {
  const user = req.query.user || "james";
  res.json(USERS[user] || USERS["james"]);
});

// Marine endpoints
app.get("/api/marine/submissions", (req, res) => res.json(marineData));
app.get("/api/marine/submissions/:id", (req, res) => {
  const sub = marineData.find((s) => s.id === req.params.id);
  sub ? res.json(sub) : res.status(404).json({ error: "Not found" });
});

// Cyber endpoints
app.get("/api/cyber/submissions", (req, res) => res.json(cyberData));
app.get("/api/cyber/submissions/:id", (req, res) => {
  const sub = cyberData.find((s) => s.id === req.params.id);
  sub ? res.json(sub) : res.status(404).json({ error: "Not found" });
});

app.listen(4000, () => console.log("Mock BFF running on :4000"));
