function getHours(timeFrame) {
  updatingSelectedMonthChoice(timeFrame);

  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      let index = 0;

      while (index < data.length) {
        let title = data[index].title;
        let currentTime = data[index].timeframes[timeFrame].current + "hrs";
        let prevTime =
          "Previous - " + data[index].timeframes[timeFrame].previous + "hrs";

        if (title === "Work") {
          setTextValue("workCurrent", currentTime);
          setTextValue("workPrev", prevTime);
        } else if (title === "Play") {
          setTextValue("playCurrent", currentTime);
          setTextValue("playPrev", prevTime);
        } else if (title === "Study") {
          setTextValue("studyCurrent", currentTime);
          setTextValue("studyPrev", prevTime);
        } else if (title === "Exercise") {
          setTextValue("exerciseCurrent", currentTime);
          setTextValue("exercisePrev", prevTime);
        } else if (title === "Social") {
          setTextValue("socialCurrent", currentTime);
          setTextValue("socialPrev", prevTime);
        } else {
          setTextValue("selfCareCurrent", currentTime);
          setTextValue("selfCarePrev", prevTime);
        }

        index++;
      }
    })
    .catch((error) => console.error(error));
}

function updatingSelectedMonthChoice(timeFrame) {
  document
    .getElementById("daily-button")
    .classList.remove("content-card-buttons-button-selected");
  document
    .getElementById("weekly-button")
    .classList.remove("content-card-buttons-button-selected");
  document
    .getElementById("monthly-button")
    .classList.remove("content-card-buttons-button-selected");

  document
    .getElementById(`${timeFrame}-button`)
    .classList.add("content-card-buttons-button-selected");
}

function setTextValue(id, value) {
  document.getElementById(id).innerHTML = value;
}
