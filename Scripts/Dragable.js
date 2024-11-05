// Get the grid container and initialize editing mode to off
const container = document.getElementById('grid-container');
var editing = false;

// Initialize Sortable but disable it initially
const sortable = new Sortable(container, {
    animation: 150,
    ghostClass: 'sortable-ghost',
    disabled: !editing, // Disable Sortable when editing mode is off
    onEnd: function () {
        const order = Array.from(container.children).map(item => item.id);
        localStorage.setItem('divOrder', JSON.stringify(order));
    }
});

// Function to toggle editing mode using a switch statement
//Also changes color of the button that calls it.
function editingMode() {
    switch (editing) {
        case true: //disables
            editing = false;
            sortable.option("disabled", true); 
            document.getElementById("editingModeButton").style.backgroundColor = "white";
            document.getElementById("editingModeButton").style.color = "black";
            break;
        case false: //enables
            editing = true;
            sortable.option("disabled", false); 
            document.getElementById("editingModeButton").style.backgroundColor = "red"; 
            document.getElementById("editingModeButton").style.color = "white";
            break;
    }
    // console.log('Editing Mode: ' + editing); enable for debuging
}

// Save the original order if it’s not already in localStorage
if (!localStorage.getItem('originalOrder')) {
    const originalOrder = Array.from(container.children).map(item => item.id);
    localStorage.setItem('originalOrder', JSON.stringify(originalOrder));
}

// Function to load the saved order or the original order if none is saved
function loadOrder() {
    const savedOrder = JSON.parse(localStorage.getItem('divOrder')) || JSON.parse(localStorage.getItem('originalOrder'));
    savedOrder.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            container.appendChild(element);
        }
    });
}

// Function to reset to the original order
function resetOrder() {
    const originalOrder = JSON.parse(localStorage.getItem('originalOrder'));
    originalOrder.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            container.appendChild(element);
        }
    });
    // Clear the saved order so that next session starts with the original layout
    localStorage.removeItem('divOrder');
}

// Load the order when the page loads
window.addEventListener('load', loadOrder);
