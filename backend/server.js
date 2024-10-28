require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: process.env.FRONTEND_URL || "http://localhost:4000" }));

// Sample data endpoint with more information
app.get("/api/data", (req, res) => {
  res.json({
    status: "success",
    message: "Data fetched successfully",
    items: [
      { id: 1, name: "Item 1", description: "This is the first item." },
      { id: 2, name: "Item 2", description: "This is the second item." },
      { id: 3, name: "Item 3", description: "This is the third item." },
      { id: 4, name: "Item 4", description: "This is the fourth item." },
    ],
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
