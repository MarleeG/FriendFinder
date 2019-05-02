var friends;
module.exports = function (app) {
friends = require("../data/friend.js");

    app.get("/api/friends", function (req, res) {
        console.log(friends);
        return res.json(friends);

    });

    app.get("/api/friends/:user", function (req, res) {
        var chosen = req.params.user;
        // console.log(chosen);
        for (var i = 0; i < friends.length; i++) {
            if (chosen === friends[i].routeName) {
                return res.json(friends[i]);
            }
        }
        return res.json(false);
    });

    // Create New Characters - takes in JSON input
    app.post("/api/friends", function (req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body-parser middleware
        var newFriend = req.body;
        console.log("new friend: ", newFriend);
        // SCORE 
        var lastUser = friends[friends.length - 1];

        console.log("last user info: ", lastUser);

        var allDifferences = [];

        console.log(friends.length - 2);
        for (var k = 0; k <= friends.length - 2; k++) {
            var totalDifference = 0;

            for (var a = 0; a < 10; a++) {
                var userScore = friends[k].scores[a];
                var newAddedUser = lastUser.scores[a];
                var difference = Math.abs(userScore - newAddedUser);
                totalDifference += difference;
            }
            allDifferences.push(totalDifference);
        }
        // All differences
        var matchDifferenceValue = Math.min(...allDifferences);
        var matchIndex = allDifferences.indexOf(matchDifferenceValue);
        // Perfect Match
        var match = friends[matchIndex];
        console.log("Perfect Match", match);
        friends.push(newFriend);

        res.json(match);
    });
}
