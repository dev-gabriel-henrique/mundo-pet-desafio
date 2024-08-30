import { apiConfig } from "./apiconfig.js";

export async function scheduleNew({
  id,
  clientName,
  petName,
  tel,
  description,
  date,
  time,
}) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ id, clientName, petName, tel, description, date, time,}),
    });

    alert("Agendamento realizado com sucesso!");
  } catch (error) {
    console.log(error);
    alert(
      "Não foi possível realizar o agendamento, por favor tente mais tarde!"
    );
  }
}
