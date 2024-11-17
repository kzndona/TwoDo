console.log("DEBUG: Loaded newtask.js")

// Get an array of all input fields inside empty list items
const emptyItems = document.querySelectorAll('.empty-item input');

// Add event listener to each input field
for (let i = 0; i < emptyItems.length; i++) {
    emptyItems[i].addEventListener('keypress', function (event) {
        if (event.key === "Enter") {
            let inputField = event.target; // The input field inside the list item
            let taskTitle = inputField.value.trim();

            if (taskTitle) {
                let  listItem = inputField.parentElement; // The parent list item
                listItem.textContent = taskTitle; // Replace the input field with the task title
                
                listItem.classList.remove('empty-item'); // Remove the 'empty-item' class
            }
        }
    });
}
