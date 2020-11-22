var player = 1;
var score1 = 0;
var score2 = 0;
var score3 = 0;
var round = 0;
var wins = [['00', '01', '02'], ['10', '11', '12'], ['20', '21', '22'], ['00', '10', '20'],
 ['01', '11', '21'], ['02', '12', '22'], ['00', '11', '22'], ['20', '11', '02']];

function myLog() {
  console.log("Player: " + player);
  console.log("Wins for player 1: " + score1);
  console.log("Wins for player 2: " + score2);
  console.log("Draws: " + score3);
  console.log("Round: " + round);
}

function resetField() {
  for (var i = 0; i <= 2; i++) {
    for (var j = 0; j <= 2; j++) {
      document.getElementById("feld_" + i + j).value = "  ";
    }
  }
  player = 1;
  setStats();
}

function resetStats() {
  score1 = 0;
  score2 = 0;
  score3 = 0;
  round = score1 + score2 + score3;
  setStats();
}

function setStats() {
  document.getElementById('pScore1').innerHTML = score1;
  document.getElementById('pScore2').innerHTML = score2;
  document.getElementById('pRound').innerHTML = round;
}

function check_for_win() {
  for (my_list of wins) {
    if (document.getElementById("feld_" + my_list[0]).value === "X") {
      if (document.getElementById("feld_" + my_list[1]).value === "X") {
        if (document.getElementById("feld_" + my_list[2]).value === "X") {
          alert("Player 1 wins !");
          score1++;
          round++;
          resetField();
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
          resetField();
        }
      }
    }
  }

  var draw_game = true;
  for (var i = 0; i <= 2; i++) {
    for (var j = 0; j <= 2; j++) {
      if (document.getElementById('feld_' + i + j).value === "  ") {
      draw_game = false;
      }
    }
  }
  if (draw_game) {
    alert("Draw!");
    score3++;
    round++;
    resetField();
    }
}

function run(num) {
  myLog();
  if (player === 1 && document.getElementById("feld_" + num).value === "  ") {
    document.getElementById("feld_" + num).value = "X";
    player = 2;
  } else if (player === 2 && document.getElementById("feld_" + num).value === "  ") {
    document.getElementById("feld_" + num).value = "O";
    player = 1;
  }
  check_for_win();
  setStats();
  
}

function positionButtons() {
  for (var i = 0; i <= 2; i++) {
    for (var j = 0; j <= 2; j++) {
      document.getElementById('feld_' + i + j).style.top = 1 + 33 * i + "%";
      document.getElementById('feld_' + i + j).style.left = 1 + 33 * j + "%";
    }
  }
}
