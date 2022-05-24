const router = require("express").Router();

//GET ALL PAYU INFO CUSTOMER
router.get("/", async (req, res) => {
    const queries = req.query
    try {
        if (queries) {
            return res.status(200).json(queries);
        }
    } catch (error) {
        res.status(500).json(error);
    }
});



//GET ALL PAYU INFO ADMIN
router.post("/finish", async (req, res) => {

    console.log('*****REQ*****',req)
    console.log('*****RES*****',res)
    try {
        return res.status(200).json(req);
    } catch (error) {
        res.status(500).json(error);
    }
});






module.exports = router;
