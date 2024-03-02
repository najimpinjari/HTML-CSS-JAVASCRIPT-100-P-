document.getElementById('birthdayForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    var name = document.getElementById('name').value;
    var wishes = document.getElementById('wishes').value;

    // Create the message
    var message = '<p>Dear ' + name + ',</p>';
    message += '<p>Wishing you a very happy birthday! May all your dreams and wishes come true. </p>';
    message += '<p>' + wishes + '</p>';

    // Display the message
    document.getElementById('output').innerHTML = message;
});
