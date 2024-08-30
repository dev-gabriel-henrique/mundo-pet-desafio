import { inputToday } from "../modal/clientForm.js";
import { scheduleShowByDate } from "../schedule/load.js";
import { selectCalendar } from "../schedule/load.js";


try {
  selectCalendar.value = inputToday;

  selectCalendar.addEventListener("input", scheduleShowByDate)

} catch (error) {
  alert("Não foi possível verificar os agendamentos, favor tente novamente mais tarde!")
  console.log(error);
}
