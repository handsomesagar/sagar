let attendeesCount = 0;

function submitRSVP() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Perform client-side validation if needed

    // Assume validation passed, update confirmed attendees count
    attendeesCount++;
    updateAttendeesCount();

    // You can also send the data to a server for further processing if required
}

function updateAttendeesCount() {
    const countElement = document.getElementById('attendeesCount');
    countElement.textContent = `Confirmed attendees: ${attendeesCount}`;
}
