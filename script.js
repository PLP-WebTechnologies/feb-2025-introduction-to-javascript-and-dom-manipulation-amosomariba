// Change the text of the paragraph
function changeText() {
    const info = document.getElementById('info-text');
    info.textContent = 'The text has been changed by JavaScript!';
  }
  
  // Change the color of the main heading
  function changeStyle() {
    const heading = document.getElementById('main-heading');
    heading.style.color = 'blue';
    heading.style.fontSize = '36px';
  }
  
  // Add or remove a box
  function toggleBox() {
    const section = document.getElementById('box-section');
    const existingBox = document.getElementById('new-box');
  
    if (existingBox) {
      section.removeChild(existingBox); // remove the box if it already exists
    } else {
      const box = document.createElement('div');
      box.id = 'new-box';
      box.textContent = 'Hello! I am a new box.';
      box.style.padding = '20px';
      box.style.backgroundColor = '#f2f2f2';
      box.style.marginTop = '10px';
      section.appendChild(box); // add the new box
    }
  }
  