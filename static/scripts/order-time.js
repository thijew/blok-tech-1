const timeInput = document.querySelector('#time-input')
timeInput.style.display = "block"
timeInput.setAttribute('required', ''); // Make the JS-generated options required

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
  option.value = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  option.textContent = option.value
  timeInput.appendChild(option)
}

// remove the required attribute if js is on
const timeFallback = document.querySelector('#time-input-js-off')
if (timeFallback) {
  timeFallback.removeAttribute('required')
}

// Set max order date to 7 days ahead
const maxDate = new Date(today.getTime() + (7 * 24 * 60 * 60 *
  1000)).toISOString().split('T')[0]


const todayStr = today.toISOString().split('T')[0]

document.getElementById('date-input').setAttribute('max', maxDate);
document.getElementById('date-input').setAttribute('min', todayStr);
document.getElementById('date-input').setAttribute('value', todayStr);




