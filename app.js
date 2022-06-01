//creation des variables (parametrage du jeux )
//les points sont dans un tableau ,le match et le match config sont des objets


const point = [0, 15, 30, 40, "AD"];

let match = {
    points: [0, 0],
    tieBreakActive: {},
    ActiveSet: 0,
    playerSetsWon: [0, 0],
    winner: -1,
    games: {},
    tieBreakScore: {},

    wonSets: [],
};

let matchConfig = {
    gamesSet: 6,
    sets: 3,
    tieBreakPoints: 7,
    players: ["Bob", "Anna"],
};



for (
    match.games = []; match.games.push([0, 0]) <= 5;

);
for (
    match.tieBreakScore = []; match.tieBreakScore.push([0, 0]) <= 5;

);

//fonction permaettant de preparer le xcore du set
function Scores() {
    Points();
    var currentSetOld = match.currentSet;
    for (var i = 0; i < matchConfig.sets; i++) {
        match.currentSet = i;
        drawGamesInSet(i, match.tieBreakActive[match.currentSet]);
        markSetRemove(i + 1);
    }
    match.currentSet = currentSetOld;
    if (match.winner == -1) markSetAdd(match.currentSet + 1);
    else drawWinner();
    for (var i = 0; i < match.wonSets.length; i++)
        $(match.wonSets[i]).addClass("bold");
    $("#latestEvent").text(match.latestEvent.text);
}

//fonction permettant de preparer le point du jeu 
function Points() {
    if (!match.tieBreakActive[match.currentSet]) {
        fadeHtml("#p1points", point[match.points[0]]);
        fadeHtml("#p2points", point[match.points[1]]);
    } else {
        fadeHtml(
            "#p1points",
            match.tieBreakScore[match.currentSet][0]
        );
        fadeHtml(
            "#p2points",
            match.tieBreakScore[match.currentSet][1]
        );
    }
}

var scoreBob = document.getElementById('#scoreBob');
var scoreAnna = document.getElementById("#scoreAnna")

scoreBob.click(function() {

    playerScores(0);
    drawScores();

});

scoreAnna.click(function() {

    playerScores(1);
    drawScores();


});
console.table(match.games.push([0, 0]) <= 5);
console.table(match)