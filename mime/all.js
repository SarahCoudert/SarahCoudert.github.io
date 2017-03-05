var counter = 0;
var timeInput = 0;
var index = 0;
var data = {};
var guess_word = [];
var good_words = 0;

var category = window.location.href.split('?')[1].split('=')[1]
var my_tab = wordsByCategory[category]
console.log('Loaded category ' + category + ' with ' + my_tab.length + ' words')

word = my_tab[index];
document.getElementById("word").innerHTML = word

function displayMime() {
  timeInput = (parseInt(document.getElementById("word_input").value));
  if (isNaN(timeInput) == true) {
    alert("Veuillez rentrer un vrai nombre");
  }
  else {
    data.time = timeInput;
    document.getElementById("div_word").style.display = "block";
    document.getElementById("time").style.display = "none";
    launchTimer();
  }
}

function launchTimer() {
  counter = timeInput;
  id = setInterval(function() {
    counter--;
    if (counter < 0) {
      clearInterval(id);
      displayResults();
    }
    else {
      document.getElementById("timer").innerHTML= counter.toString();
    }
  }, 1000);
}

function displayResults() {
  var i = 0;
  var text = "";
  document.getElementById("div_word").style.display = "none";
  document.getElementById("results").style.display = "block";
  for (i = 0; i <= index; i++) {
    text+= "<span";
    if (guess_word[i] == 1) {
      text+= " class=\"right_word\">";
      good_words++;
    }
    else if (guess_word[i] == -1)
      text+= " class=\"wrong_word\">";
    else
      text+= ">";
    text += my_tab[i] + "<br></span>";
  }
  var temp_i = i - 1;
  document.getElementById("nb_word").innerHTML= temp_i.toString();
  document.getElementById("good_words").innerHTML= good_words.toString();
  document.getElementById("show_results").innerHTML = text;
  document.getElementById("audio_mime").play();
}

function change_word(word_state) {
  if (word_state == 1) {
    document.getElementById("yeah_mime").play();
    guess_word.push(word_state);
  }
  else if (word_state == -1) {
    document.getElementById("pass_mime").play();
    guess_word.push(word_state);
  }
  else {
    document.getElementById("yeah_mime").play();
    guess_word.push(1);
  }
  index++;
  word = my_tab[index];
  document.getElementById("word").innerHTML = word
}

document.getElementById("word").oncontextmenu = function() {
          change_word(-1);
}

if (document.addEventListener) {
  document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            return false;
        }, false);
}
