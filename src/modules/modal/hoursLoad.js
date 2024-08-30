import dayjs from "dayjs";
import { openingHours } from "../../utils/openingHours.js";
import { inputToday } from "./clientForm.js";

const time = document.getElementById("time");


export function hoursLoad({ date, dailySchedules }) {
  time.innerHTML = ""
  
  const unavailableHours = dailySchedules.map((schedule) => dayjs(`${schedule.time} ${schedule.date}`).format("HH:mm"))
  
  const opening = openingHours.map((hour) => {
    
    const [scheduleHour] = hour.split(":")

    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())

    const available = !unavailableHours.includes(hour) && !isHourPast

    return {
      hour,
      available,
    }
  } 
)

  let firstAvailableIndex = -1

  opening.forEach((optionData, index) => {
    const opt = document.createElement("option");
    opt.value = optionData.hour;
    opt.innerHTML = optionData.hour
  
    time.appendChild(opt);

    if(optionData.available && firstAvailableIndex === -1) {
      firstAvailableIndex = index
    }

    if(!optionData.available) {
      opt.disabled = true
    }

    
  });

  if(opening.every((item) => !item.available)) {
    alert("Todos os horários deste dia foram preenchidos, por favor preencha outro horario")
    const date = document.getElementById("date")
    const opt = document.querySelectorAll("option")
    date.value = ""
    date.focus()
  }
}