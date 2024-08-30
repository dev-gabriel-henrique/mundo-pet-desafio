import { apiConfig } from "./apiconfig.js";
import dayjs from "dayjs";

export async function scheduleFetchByDay({date}) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/schedules`);

    const data = await response.json();

    const dailySchedules = data.filter((schedule) =>
      dayjs(date).isSame(schedule.date)
    );

    return dailySchedules;
  } catch (error) {
    console.log(error);
    alert("Não foi possível buscar os agendamentos do dia selecionado");
  }
}
