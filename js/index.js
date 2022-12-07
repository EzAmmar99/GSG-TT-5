// const box = document.querySelector(".box");
const milSecInput = document.getElementById("milSec");
const secInput = document.getElementById("Sec");
const minInput = document.getElementById("min");
const secTimerInput = document.getElementById("secTimer");
const minTimerInput = document.getElementById("minTimer");
const hourTimerInput = document.getElementById("hourTimer");
const resetBtn = document.getElementById("reset");
document.getElementById("STOPWATCH").style.display = "block";
let opendTab = "STOPWATCH";

let interval;

function openTab(evt, selectedTab) {
  stopTime();
  opendTab = selectedTab;
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(selectedTab).style.display = "block";
  evt.currentTarget.className += " active";
}

const startTimer = () => {
  let second = 0;
  let minutes = 0;
  let hours = 0;
  if (secTimerInput.value) second = parseInt(secTimerInput.value);
  if (minTimerInput.value) minutes = parseInt(minTimerInput.value);
  if (hourTimerInput.value) hours = parseInt(hourTimerInput.value);

  interval = setInterval(() => {
    if (second === 0) {
      if (minutes === 0) {
        if (hours === 0) {
          clearInterval(interval);
        } else {
          hours -= 1;
          minutes = 59;
        }
      } else {
        minutes -= 1;
        second = 59;
      }
    } else {
      second -= 1;
    }

    secTimerInput.value = second;
    minTimerInput.value = minutes;
    hourTimerInput.value = hours;
  }, 1000);
};

const startStopWatch = () => {
  let milSec = 0;
  let sec = 0;
  let min = 0;
  interval = setInterval(() => {
    milSec += 1;
    milSecInput.textContent = milSec;
    if (milSec == 100) {
      sec += 1;
      milSec = 00;
    }

    if (sec == 60) {
      min += 1;
      sec = 00;
    }
    milSecInput.value = milSec;
    secInput.value = sec;
    minInput.value = min;
  }, 10);
};

const stopTime = () => {
  clearInterval(interval);
};

const startTime = () => {
  if (opendTab === "STOPWATCH") {
    console.log(1111);
    startStopWatch();
  } else {
    startTimer();
  }
};

const reset = () => {
  stopTime();
  milSecInput.value = 0;
  secInput.value = 0;
  minInput.value = 0;
  secTimerInput.value = 0;
  minTimerInput.value = 0;
  hourTimerInput.value = 0;
};
