const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // to parse JSON bodies

// ✅ Callback endpoint for MTN MoMo to send payment updates
app.post("/api/momo/callback", (req, res) => {
  console.log("📬 Callback received from MoMo:", req.body);

  // You can process the status here, like saving it to a database
  // Example:
  // const transactionStatus = req.body.status;

  res.status(200).send("Callback received");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
