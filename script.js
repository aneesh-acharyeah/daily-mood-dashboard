const calendarGrid = document.getElementById('calendarGrid');
const emojiButtons = document.querySelectorAll('.emoji');

const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

// Load moods from localStorage
let moodData = JSON.parse(localStorage.getItem('moodData')) || {};

// Save mood for today
emojiButtons.forEach(button => {
  button.addEventListener('click', () => {
    moodData[today] = button.textContent;
    localStorage.setItem('moodData', JSON.stringify(moodData));
    renderCalendar();
  });
});

// Render calendar grid
function renderCalendar() {
  calendarGrid.innerHTML = '';
  const daysToShow = 30;
  for (let i = daysToShow - 1; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const key = date.toISOString().split('T')[0];
    const mood = moodData[key] || '';
    const cell = document.createElement('div');
    cell.className = 'grid-item';
    cell.textContent = mood;
    calendarGrid.appendChild(cell);
  }
}

// Initial render
renderCalendar();
