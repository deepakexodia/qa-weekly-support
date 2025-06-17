// Array of names
const names = [
    "Deepak",
    "Shridhar",
    "Asus",
    "Nunung",
    "Latifah"	
];

// Get the current week number
function getWeekNumber(date) {
  // Adjust to Indian Standard Time (IST)
  date.setHours(date.getHours() + 5); // UTC offset for IST
  date.setMinutes(date.getMinutes() + 30); // UTC offset for IST
  
  // Copy date so don't modify original
  date = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  date.setUTCHours(0, 0, 0, 0);
  
  // Set to nearest Thursday: current date + 4 - current day number
  // Make Sunday's day number 7
  date.setUTCDate(date.getUTCDate() + 4 - (date.getUTCDay() || 7));
  
  // Get first day of year
  var yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  
  // Calculate full weeks to nearest Thursday
  var weekNo = Math.ceil((((date - yearStart) / 86400000) + 1) / 7);
  
  // Return week number
  return weekNo;
}

// Display the current name based on the week
function displayCurrentName() {
  var today = new Date();
  var weekNumber = getWeekNumber(today);   
  const index = weekNumber % names.length;
  const primary = document.getElementById("primary");
  const secondary = document.getElementById("secondary");
  primary.textContent = names[index];
  secondary.textContent = names[(index+2) % names.length];
}

// Call the function to initially display the name
displayCurrentName();
