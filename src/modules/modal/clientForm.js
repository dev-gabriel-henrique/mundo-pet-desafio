import dayjs from "dayjs";
import { scheduleNew } from "../../services/scheduleNew.js";
import { scheduleDay } from "../schedule/load.js";

const newSchedule = document.getElementById("newSchedule");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

const name = document.getElementById("name");
const pet = document.getElementById("petName");
const tel = document.getElementById("tel");
const description = document.getElementById("description");
const date = document.getElementById("date")

export const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

newSchedule.addEventListener("click", () => {
  modal.showModal();
  date.value = inputToday


  newSchedule.style.display = "none";
});

function formatTel(input) {

  function format(value) {
    value = value.replace(/\D+/g, "");

    return value.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  }

  input.addEventListener("input", () => {
    input.value = format(input.value) 
  })
}

formatTel(tel)

modal.onsubmit = async (event) => {
  event.preventDefault();

  try {
    const id = new Date().getTime().toString();

    const clientName = name.value.trim();

    if (!clientName) {
      return alert("Informe seu nome por gentileza");
    }

    const petName = pet.value.trim();
    if (!petName) {
      return alert("Informe o nome de seu animalzinho por gentileza!");
    }

    const telValue = tel.value.trim();

    const descriptionValue = description.value;
    if (!descriptionValue) {
      return alert("Informe o serviço que você busca");
    }

    const selectDate = document.getElementById("date");
    const date = selectDate.value;
    if (!date) {
      return alert("Informe a data por gentileza");
    }

    const selectTime = document.getElementById("time");

    const time = selectTime.value;
    if (!time) {
      return alert("Informe o horário por gentileza!");
    }

    await scheduleNew({
      id,
      clientName,
      petName,
      tel: telValue,
      description: descriptionValue,
      date,
      time,
    });

    await scheduleDay();

    window.navigation.reload()
  } catch (error) {
    console.log(error);
    alert(
      "Não foi possível realizar o agendamento de seu petzinho, tente novamente mais tarde!"
    );
  }
};

closeModal.addEventListener("click", () => {
  modal.close();
});

modal.addEventListener("close", () => {
  newSchedule.style.display = "initial";
});
