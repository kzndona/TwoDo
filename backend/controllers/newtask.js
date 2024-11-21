console.log("DEBUG: Loaded newtask.js")

// Get an array of all input fields
const emptyItems = document.querySelectorAll('input');

// Add event listener to each input field
for (let i = 0; i < emptyItems.length; i++) {
    emptyItems[i].addEventListener('keypress', function (event) {
        if (event.key === "Enter") {
            let inputField = event.target; // The input field inside the list item
            let taskTitle = inputField.value.trim();

            if (taskTitle) {
                let newListItem = document.createElement('li'); // Create a new list item
                newListItem.textContent = taskTitle; // Replace the input field with the task title
                let parentUnorderedList = inputField.closest('ul'); // Get the parent unordered list of the input field
                parentUnorderedList.insertBefore(newListItem, emptyItems[i]) // Append newListItem to the parent unordered list
                inputField.value = ''; // Clear the input field

                attachContextMenu(newListItem); // Attach the context menu. para sa mga new added tasks
            }
        }
    });
}
