const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const cors = require("cors");

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connection Succesful"))
    .catch((err) => console.log("DB Connection failed"));

app.use(cors());

app.use(express.static("public"));

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/orders", orderRoute);

app.listen(process.env.PORT, () => {
    console.log("Backend Server is running in port 5000");
});
