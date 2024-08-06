const times = [
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
]

export const availableTimes = () => {
  const [time] = new Date().toTimeString().split(" ")

  const [hours] = time.split(":")

  return times.filter((t) => {
    const [h] = t.split(":")

    return parseInt(h) > parseInt(hours)
  })
}
