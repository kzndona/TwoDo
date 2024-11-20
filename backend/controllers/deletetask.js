console.log("DEBUG: Loaded deletetask.js")

// context menu to a list item

function attachContextMenu(listItem) {
    listItem.addEventListener('contextmenu', function (event){
        console.log("DEBUG: Context menu event triggered for:", listItem);
        console.log("DEBUG: Right-click detected, preventing default menu.");
        event.preventDefault();

    // delete exiting list item
    const exitingMenu = document.getElementById('context-menu');
    if (exitingMenu) exitingMenu.remove();


    //context menu
    const contextMenu = document.createElement('div');
    contextMenu.id = 'context-menu';
        contextMenu.textContent = 'Delete';
        contextMenu.style.position = 'absolute';
        contextMenu.style.top = `${event.pageY}px`;
        contextMenu.style.left = `${event.pageX}px`;
        contextMenu.style.backgroundColor = '#ffffff';
        contextMenu.style.border = '1px solid #ccc';
        contextMenu.style.padding = '5px 10px';
        contextMenu.style.borderRadius = '4px';
        contextMenu.style.boxShadow = '0px 2px 5px rgba(0,0,0,0.2)';
        contextMenu.style.cursor = 'pointer';
        document.body.appendChild(contextMenu);
        console.log("DEBUG: Context menu appended:", contextMenu);
        console.log("DEBUG: Context menu position - X:", event.pageX, "Y:", event.pageY);

        //delete task on click
        contextMenu.addEventListener('click', function (){
            console.log("DEBUG: Deleting list item:", listItem);
            listItem.remove();
            contextMenu.remove();
        });

        //remove context menu on click 
        document.addEventListener('click', function onclickOutside(){
            console.log("DEBUG: Clicking outside. Removing custom context menu.");
            contextMenu.remove();
            document.removeEventListener('click', onclickOutside);
        });
    });
}

window.addEventListener('DOMContentLoaded', () => {
    const allListItem = document.querySelectorAll('.column li');
    console.log("DEBUG: Found list items:", allListItem);

    allListItem.forEach((listItem) => {
        console.log("DEBUG: Attaching context menu to:", listItem);
        attachContextMenu(listItem);
    });
})

