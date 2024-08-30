import { apiConfig } from "./apiconfig.js";

export async function scheduleCancel({ id }) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: "DELETE",
    });

    alert("Agendamento cancelado com sucesso!")
  } catch (error) {
    console.log(error);
    alert("Não foi possível cancelar o agendamento, favor tente mais tarde!")
  }
}