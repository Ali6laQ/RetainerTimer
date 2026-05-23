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

    document.getElementById("result").innerText = `${formattedHour}:${formattedMinute} ${period}`;
}
