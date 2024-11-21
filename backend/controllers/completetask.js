console.log("DEBUG: Loaded completetask.js")

// Get an array of all list items
const pastDueList = document.getElementById('past-due-list');
const pastDueInput = document.getElementById('past-due-input');
const inboxList = document.getElementById('inbox-list');
const inboxInput = document.getElementById('inbox-input');
const completedList = document.getElementById('completed-list');
const completedInput = document.getElementById('completed-input');

// Add event listener to columns
pastDueList.addEventListener('click', handleClick);
inboxList.addEventListener('click', handleClick);
completedList.addEventListener('click', handleClick);

// Click Manager
function handleClick(event) {
    const clickedItem = event.target;

    // Ensure click target is on a list item
    if (clickedItem.tagName === 'LI') {
        completeTask(clickedItem);
    }
}

// Create a complete task toggle function
function completeTask(listItem) {
    if (listItem.classList.contains('completed')) {
        listItem.classList.remove('completed');
        completedList.removeChild(listItem);
        inboxList.insertBefore(listItem, inboxInput);
    } else {
        listItem.classList.add('completed');
        const parentList = listItem.closest('ul');
        parentList.removeChild(listItem);
        completedList.insertBefore(listItem, completedInput);
    }
}