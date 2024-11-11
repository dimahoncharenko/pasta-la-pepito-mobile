import { DELIVERY_END_HOURS, DELIVERY_START_HOURS } from "../constants/delivery"

export const times = () => {
  let res: string[] = []

  for (let i = DELIVERY_START_HOURS; i < DELIVERY_END_HOURS; i++) {
    res.push(`${i}:00`, `${i}:30`)
  }

  return res
}

export const getCurrentHours = () => {
  const [time] = new Date().toTimeString().split(" ")
  const [hours] = time.split(":")

  return hours
}

export const availableTimes = () => {
  const hours = getCurrentHours()

  if (Number(hours) >= DELIVERY_END_HOURS) {
    // If it's too late for delivery, then just return all times for tomorrow
    return times()
  }

  return times().filter((t) => {
    const [h] = t.split(":")

    return parseInt(h) > parseInt(hours)
  })
}
