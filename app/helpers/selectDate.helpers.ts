import { DELIVERY_END_HOURS } from "../constants/delivery"
import { getCurrentHours } from "./selectTime.helpers"

const monthsMap: Record<string, number> = {
  Jan: 1,
  Feb: 2,
  Mar: 3,
  Apr: 4,
  May: 5,
  Jun: 6,
  Jul: 7,
  Aug: 8,
  Sep: 9,
  Oct: 10,
  Nov: 11,
  Dec: 12,
}

const daysMap: Record<string, string> = {
  Mon: "Пн",
  Tue: "Вт",
  Wed: "Ср",
  Thu: "Чт",
  Fri: "Пт",
  Sat: "Сб",
  Sun: "Нд",
}

const regex = /(\w{3})\s(\w{3})\s(\d{2})\s(\d{4})/

export const computeAvailableDates = () => {
  const now = new Date().toDateString()
  const res: string[] = []
  const match = now.match(regex)

  if (match) {
    const day = match[3]
    const month = match[2]
    const year = match[4]

    // if it's late for delivery, then omit today
    const currentHours = getCurrentHours()
    for (let i = Number(currentHours) >= DELIVERY_END_HOURS ? 1 : 0; i < 7; i++) {
      const date = new Date(parseInt(year), monthsMap[month] - 1, parseInt(day) + i)
      const dayOfWeek = daysMap[date.toLocaleString("en-US", { weekday: "short" })]
      const formattedDate = date.toLocaleString("de-DE", {
        month: "2-digit",
        day: "2-digit",
        year: "2-digit",
      })
      res.push(i === 0 ? "Сьогодні" : `${formattedDate} - ${dayOfWeek}`)
    }
  }

  return res
}
