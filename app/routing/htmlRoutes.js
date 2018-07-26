module.exports = function (app) {
    var path = require("path");
    // Sets up the Express App
    // var app = express();
    // var PORT = 4000;

    // Answers for questions
    // var questionValues = [];

    // Name and Image
    // var userInfo = [];

    // Values User Inputted
    // var allValues = [];

    // JSon Object
    // var jsonObject = [{
    //     name: "Rebecca",
    //     photo: "https://pbs.twimg.com/media/DJfd-oBXkAEWyPP.jpg",
    //     scores: [5, 3, 1, 5, 1, 2, 5, 4, 3, 4]
    // }, {
    //     name: "Quagmire",
    //     photo: "https://pre00.deviantart.net/26b2/th/pre/i/2015/196/f/d/quagmire__family_guy__2_by_frasier_and_niles-d91e0ss.jpg",
    //     scores: [3, 1, 1, 1, 1, 1, 5, 3, 5, 1]
    // }, {
    //     name: "Herbert",
    //     photo: "https://vignette.wikia.nocookie.net/familyguyfanon/images/c/c5/Johnathan_Herbert.png/revision/latest?cb=20161126222916",
    //     scores: [2, 3, 5, 1, 2, 4, 2, 1, 2, 3]
    // }];

    // var users = jsonObject;

    // Routes
    // Basic route that sends the user first to the AJAX Page
    // file name
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });

    //   relative path
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });
};