import dayjs from "dayjs";
import { inputToday } from "../modal/clientForm";

const scheduleMorning = document.getElementById("scheduleMorning");
const scheduleAfternoon = document.getElementById("scheduleAfternoon");
const scheduleNight = document.getElementById("scheduleNight");
const date = document.getElementById("date")
const scheduleWhen = dayjs(`${schedule.date} ${schedule.time}`);


export async function scheduleShow({ dailySchedules }) {
  try {
    scheduleMorning.innerHTML = "";
    scheduleAfternoon.innerHTML = "";
    scheduleNight.innerHTML = "";

    dailySchedules.sort((last, item) => {
      const lastTime = last.time.split(":").at(0)
      const itemTime = item.time.split(":").at(0)

      return Number(lastTime) - Number(itemTime)}).forEach((schedule) => {
      const item = document.createElement("li");
      item.setAttribute("data-id", schedule.id);
      item.classList.add("clients");

      const scheduledClients = document.createElement("div");

      const time = document.createElement("h3");
      time.textContent = schedule.time;

      const petName = document.createElement("strong");
      petName.textContent = `${schedule.petName} /`;

      const clientName = document.createElement("p");
      clientName.textContent = " " + schedule.clientName;

      clientName.prepend(petName);

      scheduledClients.append(time, clientName);

      const service = document.createElement("span");
      service.textContent = schedule.description;

      const removeButton = document.createElement("button");
      removeButton.classList.add("removeScheduling");
      removeButton.textContent = "Remover Agendamento";

      item.append(scheduledClients, service, removeButton);

      const inputNow = dayjs(new Date()).format("YYYY-MM-DD HH:mm");
      

      if(scheduleWhen.isBefore(inputNow)) {
        scheduledClients.classList.add("customersServed")
        service.classList.add("customersServed")
        removeButton.textContent = "Cliente atendido"
      } else {
        item.style.color = "initial"
        item.style.textDecoration = "none"
        scheduledClients.classList.toggle("scheduledClients")
      }

      const hour = time.innerHTML.split(":").at(0);

      if (hour <= 12) {
        scheduleMorning.appendChild(item);
      } else if (hour > 12 && hour <= 18) {
        scheduleAfternoon.appendChild(item);
      } else {
        scheduleNight.appendChild(item);
      }
    });
  } catch (error) {
    console.log(error);
    alert("Não foi possível exibir os agendamentos");
  }
}
