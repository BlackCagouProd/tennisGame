//creation des variables (parametrage du jeux )
//les points sont dans un tableau ,le match et le match config sont des objets
//utilisation de jquery


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

/**------------------------------------------------fonctions------------------------------------------------------------------- */


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
        fadeHtml("#Bobpoints", point[match.points[0]]);
        fadeHtml("#Annapoints", point[match.points[1]]);
    } else {
        fadeHtml(
            "#Bobpoints",
            match.tieBreakScore[match.currentSet][0]
        );
        fadeHtml(
            "#Annapoints",
            match.tieBreakScore[match.currentSet][1]
        );
    }
}


$("#scroreBob").click(function() {

    playerScores(0);
    Scores();;
});

$("#scroreAnna").click(function() {

    playerScores(1);
    Scores();

});
//fonction permettant le scorage du jeux
function playerScores(winningPlayer) {
    match.latestEvent.level = 1;

    var losingPlayer = (winningPlayer + 1) % 2;

    if (match.tieBreakActive[match.currentSet]) {
        match.tieBreakScore[match.currentSet][winningPlayer]++;
        if (
            match.tieBreakScore[match.currentSet][winningPlayer] >=
            matchConfig.tieBreakPoints &&
            match.tieBreakScore[match.currentSet][winningPlayer] -
            match.tieBreakScore[match.currentSet][losingPlayer] >=
            2
        ) {
            playerWinsSet(winningPlayer);
        }
    } else {
        // 0 to 30
        if (match.points[winningPlayer] <= 2)
            match.points[winningPlayer]++;
        // 40
        else if (match.points[winningPlayer] == 3) {
            // l = 40 - both had 40
            if (match.points[losingPlayer] == 3)
                match.points[winningPlayer]++;
            // l = AD
            else if (match.points[losingPlayer] == 4)
                match.points[losingPlayer]--;
            else playerWinsGame(winningPlayer);
        }
        // AD
        else if (match.points[winningPlayer] == 4)
            playerWinsGame(winningPlayer);
    }
    if (match.latestEvent.level <= 1)
        match.latestEvent.text =
        matchConfig.players[winningPlayer] + " marque le point";

    // transmit the match 
    emitMatch();
}
//fonctions du paramettrage du tiebreak
function drawGamesInSet(set, showTieBreakScore) {
    fadeHtml(
        "#Bobset" + parseInt(set + 1),
        match.games[set][0] +
        (showTieBreakScore ?
            "<sup>" +
            match.tieBreakScore[match.currentSet][0] +
            "</sup>" :
            "")
    );
    fadeHtml(
        "#Annaset" + parseInt(set + 1),
        match.games[set][1] +
        (showTieBreakScore ?
            "<sup>" +
            match.tieBreakScore[match.currentSet][1] +
            "</sup>" :
            "")
    );
}

function playerWinsGame(winningPlayer) {
    var losingPlayer = (winningPlayer + 1) % 2;

    match.points[0] = 0;
    match.points[1] = 0;

    match.games[match.currentSet][winningPlayer]++;

    if (
        match.games[match.currentSet][winningPlayer] >=
        matchConfig.gamesPerSet
    ) {
        // oponent will have at least 2 games difference
        if (
            match.games[match.currentSet][winningPlayer] -
            match.games[match.currentSet][losingPlayer] >=
            2
        )
            playerWinsSet(winningPlayer);
        else if (
            match.games[match.currentSet][winningPlayer] ==
            matchConfig.gamesPerSet &&
            match.games[match.currentSet][losingPlayer] ==
            matchConfig.gamesPerSet
        )
            match.tieBreakActive[match.currentSet] = true;
    }

    if (match.latestEvent.level <= 2) {
        match.latestEvent.level = 2;
        match.latestEvent.text =
            matchConfig.players[winningPlayer] + " gagne la partie";
    }
}

function playerWinsSet(winningPlayer) {
    match.playerSetsWon[winningPlayer]++;
    match.wonSets.push(
        "#p" +
        parseInt(winningPlayer + 1) +
        "set" +
        parseInt(match.currentSet + 1)
    );
    if (match.playerSetsWon[winningPlayer] == (matchConfig.sets + 1) / 2) {
        match.winner = winningPlayer;
        return;
    }
    match.currentSet++;
    if (match.latestEvent.level <= 3) {
        match.latestEvent.level = 3;
        match.latestEvent.text =
            matchConfig.players[winningPlayer] + " prend le set ";
    }
}

//fonctions de pramattrage du gagnant 
function drawWinner() {
    match.latestEvent.level = 4;
    match.latestEvent.text =
        matchConfig.players[match.winner] + " gagne le match";
    $("#scroreBob").prop("disabled", true);
    $("#scroreAnna").prop("disabled", true);
}


console.table(match.games);
console.table(match)