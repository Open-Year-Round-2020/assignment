module.exports = function (app, fs) {
  app.get("/", function (req, res) {
    res.render("login.html");
  });

  app.get("/feed", function (req, res) {
    res.render("feed.html");
  });

  app.get("/post", function (req, res) {
    res.render("profile.html");
  });
};
