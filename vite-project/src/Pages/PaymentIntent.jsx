// server.js
const express = require("express");
const app = express();
const Stripe = require("stripe");
const cors = require("cors");

const stripe = Stripe("your_stripe_secret_key"); // get from https://dashboard.stripe.com/test/apikeys

app.use(cors());
app.use(express.json());

app.post("/create-payment-intent", async (req, res) => {
  try {
    const { amount } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd", // or "rwf" if using Rwandan francs
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
