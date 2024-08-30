import { scheduleDay } from "../schedule/load.js";

const selectDate = document.getElementById("date")

selectDate.onblur = () => scheduleDay()
