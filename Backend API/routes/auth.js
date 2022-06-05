const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const { verifyToken } = require("./verifyToken");

//REGISTER
router.post("/register", async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json("Ya existe un usuario con ese correo");
        }

        user = new User({
            fName: req.body.fName,
            lName: req.body.lName,
            cedula: req.body.cedula,
            email,
            password: CryptoJS.AES.encrypt(
                password,
                process.env.PASS_SEC
            ).toString(),
        });

        newUser = await user.save();

        const accessToken = jwt.sign(
            {
                id: newUser._id,
                isAdmin: newUser.isAdmin,
            },
            process.env.JWT_SEC,
            { expiresIn: "3d" }
        );

        res.status(200).json({...newUser._doc, accessToken}); // estudiar
    } catch (error) {
        res.status(500).json({ ok: false, msg: error }); // estudiar
    }
});

//LOGIN
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            return res.status(401).json("Credencialeas incorrectas");
        }

        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_SEC
        );

        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        if (originalPassword !== req.body.password) {
            return res.status(401).json("Contraseña incorrecta");
        }

        const accessToken = jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin,
            },
            process.env.JWT_SEC,
            { expiresIn: "3d" }
        );

        const { password, ...others } = user._doc;

        res.status(200).json({ ...others, accessToken });
    } catch (error) {
        console.log("*****ERROR*****", error);
        res.status(500).json(error);
    }
});

module.exports = router;
