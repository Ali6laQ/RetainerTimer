function calculateTime(){
    var startTime = document.getElementById("startTime").value;
    // Parse the start time
    var [hours, minutes] = startTime.split(':').map(Number);
    var endHour = (hours + 8) % 24;
    var endMinute = minutes;
    console.log(endHour);
    // Format minutes with leading zero
    var formattedMinute = String(endMinute).padStart(2, '0');
    var period = endHour < 12 ? 'AM' : 'PM';
    var formattedHour = endHour % 12;
    if (formattedHour === 0) {
        formattedHour = 12;
    }

    var finalTime = `${formattedHour}:${formattedMinute} ${period}`;
    document.getElementById("result").innerText = finalTime;
    localStorage.setItem("Savedresult", finalTime);   // Save the result to local storage
}

// Load the saved result from local storage when the page loads
window.onload = function() {
    var savedResult = localStorage.getItem("Savedresult");
    if (savedResult) {
        document.getElementById("result").innerText = savedResult;
    }
}
