const workHoursCurrentID = "workCurrent";
const workHoursPrevID = "workPrev";
const playHoursCurrentID = "playCurrent";
const playHoursPrevID = "playPrev";
const studyHoursCurrentID = "studyCurrent";
const studyHoursPrevID = "studyPrev";
const exerciseCurrentID = "exerciseCurrent";
const exercisePrevID = "exercisePrev";
const socialCurrentID = "socialCurrent";
const socialPrevID = "socialPrev";
const selfCareCurrentID = "selfCareCurrent";
const selfCarePrevID = "selfCarePrev";

function getHours(timeFrame) {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      let index = 0;

      while (index < data.length) {
        currentTimeValue = data[index].timeframes[timeFrame].current + "hrs";
        prevTimeValue =
          "Previous - " + data[index].timeframes[timeFrame].previous + "hrs";

        if (data[index].title === "Work") {
          setTextValue(workHoursCurrentID, currentTimeValue);
          setTextValue(workHoursPrevID, prevTimeValue);
        } else if (data[index].title === "Play") {
          setTextValue(playHoursCurrentID, currentTimeValue);
          setTextValue(playHoursPrevID, prevTimeValue);
        } else if (data[index].title === "Study") {
          setTextValue(studyHoursCurrentID, currentTimeValue);
          setTextValue(studyHoursPrevID, prevTimeValue);
        } else if (data[index].title === "Exercise") {
          setTextValue(exerciseCurrentID, currentTimeValue);
          setTextValue(exercisePrevID, prevTimeValue);
        } else if (data[index].title === "Social") {
          setTextValue(socialCurrentID, currentTimeValue);
          setTextValue(socialPrevID, prevTimeValue);
        } else {
          setTextValue(selfCareCurrentID, currentTimeValue);
          setTextValue(selfCarePrevID, prevTimeValue);
        }

        index++;
      }
    })
    .catch((error) => console.error(error));
}

function setTextValue(id, variable) {
  document.getElementById(id).innerHTML = variable;
}
