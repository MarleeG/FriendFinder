// Dependenciess

var express = require("express");
// npm 
var bodyParser = require("body-parser");
// var path = require("path");


// Users from friend.js
// var allUsers = require("./app/data/friend.js");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// connecting public data to client 
app.use(express.static(__dirname + "./app/public"));


require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);


// append to JSON Object
// var newUser = {
//     name: userInfo[0].username,
//     photo: userInfo[0].photo,
//     scores: allValues
// };

// jsonObject.push(newUser);

// i = allValues.length;

// // SCORE 
// var lastUser = jsonObject[jsonObject.length - 1];
// console.log("last user info: ", lastUser);

// var allDifferences = [];

// console.log(jsonObject.length - 2);

// for (var k = 0; k <= jsonObject.length - 2; k++) {
//     var totalDifference = 0;

//     for (var a = 0; a < 10; a++) {
//         var userScore = jsonObject[k].scores[a];
//         var newAddedUser = lastUser.scores[a];

//         var difference = Math.abs(userScore - newAddedUser);

//         totalDifference += difference;
//     }

//     allDifferences.push(totalDifference);
// }

// // All differences
// // console.log("all differences", allDifferences);
// var matchDifferenceValue = Math.min(...allDifferences);
// var matchIndex = allDifferences.indexOf(matchDifferenceValue);

// // Perfect Match
// var match = jsonObject[matchIndex];
// console.log("Perfect Match", match);

// $("#perfect_match_image").attr("src", match.photo);
// $("#match_name").text(match.name);
// $('#myModal').modal('toggle');




// if (allValues.indexOf(0) === -1 && userInfo[0].username !== "" && userInfo[0].photo !== "") {
//     // jsonObject = [];
//     console.log("JSON OBJECT", jsonObject);
// }
// FROM FRIENDS.JS


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});



