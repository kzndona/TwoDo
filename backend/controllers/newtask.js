console.log("success")

// Select all input fields inside empty list items
var emptyItems = document.querySelectorAll('.empty-item input');

// Add event listener to each input field
for (var i = 0; i < emptyItems.length; i++) {
    emptyItems[i].addEventListener('keypress', function (event) {
        if (event.key === "Enter") { // Check if the Enter key was pressed
            var inputField = event.target; // The input field inside the list item
            var taskTitle = inputField.value.trim(); // Get and trim the input value

            if (taskTitle) {
                var listItem = inputField.parentElement; // The parent list item
                listItem.textContent = taskTitle; // Replace the input field with the task title
                
                listItem.classList.remove('empty-item'); // Remove the 'empty-item' class
            } else {
                alert("Task title cannot be empty!"); // Alert if input is empty
            }
        }
    });
}
