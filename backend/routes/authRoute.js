const router = require("express").Router();
const passport = require("passport");

router.get("/login/success", (req, res) => {
    if(req.user) {
        res.status(200).json({
            success: true,
            message: "user has successfully authenticated.",
            user: req.user,
        });
    }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "user failed to authenticate.",
  });
});

router.get("/logout", (req,res)=>{
    req.logOut();
    res.redirect(CLIENT_URL);
})


router.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect:process.env.CLIENT_URL+"/login/failed",
  })
);

module.exports = router;