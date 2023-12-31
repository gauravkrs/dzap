const express = require("express");
const app = express();
const cors = require("cors");
const cryptoCurrencyRoute = require("./src/routes/cryptoCurrencyRoute");

// Getting data in json format
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "https://dzapcrpto.vercel.app/",
    methods: ["GET", "HEAD, POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello cryptocurrency convertor service!");
});

app.use("/dzap", cryptoCurrencyRoute);

// Error handling middleware - to catch errors globally
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
