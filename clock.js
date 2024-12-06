function updateIndianClock() {
    const now = new Date();
    const indianTime = now.toLocaleTimeString("en-IN", { timeZone:"Asia/Kolkata" });
    document.getElementById('clock1').textContent = indianTime;
}

function updateOtherClock() {
    const dropdown = document.getElementById('country-select');
    const selectedTimeZone = dropdown.value;
    const now = new Date();
    const otherTime = now.toLocaleTimeString("en-US", {timeZone: selectedTimeZone});
    document.getElementById('clock2').textContent = otherTime;
}

updateIndianClock();
updateOtherClock();

setInterval(() => {
    updateIndianClock();
    updateOtherClock();
},1000);

document.getElementById('country-select').addEventListener("change", updateOtherClock);