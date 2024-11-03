const root = document.documentElement;

// Function to set and save CSS variable
function setCSSVariable(variable, value) {
  root.style.setProperty(variable, value);
  localStorage.setItem(variable, value); // Save to localStorage
}

// Function to load preferences from localStorage
function loadPreferences() {
  const bgColor = localStorage.getItem('--background-color');
  const textColor = localStorage.getItem('--text-color');
  const accentColor = localStorage.getItem('--accent-color');
  const headerColor = localStorage.getItem('--header-color')

  // Apply saved values if they exist
  if (bgColor) setCSSVariable('--background-color', bgColor);
  if (textColor) setCSSVariable('--text-color', textColor);
  if (accentColor) setCSSVariable('--accent-color', fontSize);
  if (headerColor) setCSSVariable('--header-color', headerColor)
}

//bg color
document.getElementById('bgColorPicker').addEventListener('input', (event) => {
    setCSSVariable('--background-color', event.target.value);
});

//Text color
document.getElementById('textColorPicker').addEventListener('input', (event) => {
    setCSSVariable('--text-color', event.target.value);
});
//accent color
document.getElementById('accentColorPicker').addEventListener('input', (event) => {
    setCSSVariable('--accent-color', event.target.value);
});  
// header color
document.getElementById('headerColorPicker').addEventListener('input', (event) => {
    setCSSVariable('--header-color', event.target.value);
}); 

//Font
document.getElementById('fontSizeSlider').addEventListener('input', (event) => {
    setCSSVariable('--font-size', `${event.target.value}px`);
});


// Call loadPreferences when the page loads
window.addEventListener('load', loadPreferences);
