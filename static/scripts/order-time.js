const select = document.querySelector('#time-input')

// Define the available times
const today = new Date()
const startTime = new Date(today.getTime())
startTime.setHours(17, 0, 0, 0); // set start time to 5:00 PM
const endTime = new Date(today.getTime())
endTime.setHours(20, 0, 0, 0); // set end time to 8:00 PM
const interval = 15 // 15 minutes

// Loop through the available times and add an option for each one
for (let time = startTime; time <= endTime; time.setMinutes(time.getMinutes() + interval)) {
  const option = document.createElement('option')
  option.value = time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
  option.textContent = option.value
  select.appendChild(option)
}

console.log('End time:', endTime)

