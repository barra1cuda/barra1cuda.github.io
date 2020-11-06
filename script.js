var player = 1;
var score1 = 0;
var score2 = 0;
var score3 = 0;
var round = 1;
var wins = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

function my_log() {
    console.log("Player: " + player);
    console.log("Wins for player 1: " + score1);
    console.log("Wins for player 2: " + score2);
    console.log("Draws: " + score3);
    console.log("Round: " + round);
}
        
function reset_field() {
    var i;
    for (i = 0; i < 9; i++) {
        document.getElementById("feld_" + i).value = "  ";
    }
}

function resetscore() {
    player = 1;
    score1 = 0;
    score2 = 0;
    score3 = 0;
    document.getElementById('tabscore1').innerHTML = score1;
    document.getElementById('tabscore2').innerHTML = score2;
}

function resetround() {
    player = 1;
    score1 = 0;
    score2 = 0;
    score3 = 0;
    round = score1 + score2 + score3 + 1;
    document.getElementById('round').innerHTML = round;
}
        
function set_score() {
    document.getElementById('tabscore1').innerHTML = score1;
    document.getElementById('tabscore2').innerHTML = score2;
    document.getElementById('round').innerHTML = round;
}

function check_for_win() {
    for (my_list of wins) {
        if (document.getElementById("feld_" + my_list[0]).value === "X") {
            if (document.getElementById("feld_" + my_list[1]).value === "X") {
                if (document.getElementById("feld_" + my_list[2]).value === "X") {
                    alert("Player 1 wins !");
                    score1++;
                    round++;
                    player = 1;
                    reset_field();
                }
            }
        }
    }
    
    for (my_list of wins) {
        if (document.getElementById("feld_" + my_list[0]).value === "O") {
            if (document.getElementById("feld_" + my_list[1]).value === "O") {
                if (document.getElementById("feld_" + my_list[2]).value === "O") {
                    alert("Player 2 wins !");
                    score2++;
                    round++;
                    player = 1;
                    reset_field();
                }
            }
        }
    }

    var draw_game = true, i;
    for (i = 0; i <= 8; i++) {
        if (document.getElementById('feld_' + i).value === "  ") {
            draw_game = false;
        }  
    }
    if (draw_game) {
        alert("Draw!");
        score3++;
        round++;
        player = 1;
        reset_field();
    }
}

function run(num) {
    my_log();
    if (player === 1 && document.getElementById("feld_" + num).value === "  ") {
        document.getElementById("feld_" + num).value = "X";
        player = 2;
    } else if (player === 2 && document.getElementById("feld_" + num).value === "  ") {
        document.getElementById("feld_" + num).value = "O";
        player = 1;
    }
    check_for_win();
    set_score();
}