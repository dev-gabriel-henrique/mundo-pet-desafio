import { scheduleShowByDate } from "./load.js";
import { scheduleCancel } from "../../services/scheduleCancel.js";

const periods = document.querySelectorAll(".clientSchedule");

periods.forEach((period) => {
  period.addEventListener("click", async (event) => {
    if(event.target.classList.contains("removeScheduling")) {
      const item = event.target.closest("li");

      const { id } = item.dataset;

      if (id) {
        const isConfirm = confirm(
          "Tem certeza que deseja cancelar o agendamento?"
        );

        if (isConfirm) {
          await scheduleCancel({ id });

          scheduleShowByDate();
        }
      }
    }
  });
});
