import { scheduleFetchByDay } from "../../services/scheduleFetchByDay.js"
import { hoursLoad } from "../modal/hoursLoad.js"
import { scheduleShow } from "./show.js"

const selectDate = document.getElementById("date")
export const selectCalendar = document.getElementById("initialCalendar")

export async function scheduleDay() {
  const date = selectDate.value

  const dailySchedules = await scheduleFetchByDay({date})

  hoursLoad({ date, dailySchedules })
}

export async function scheduleShowByDate() {
  const date = selectCalendar.value

  const dailySchedules = await scheduleFetchByDay({date})
    
  scheduleShow({dailySchedules})
}