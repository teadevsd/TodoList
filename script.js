"use strict";
const inputText = document.getElementById('inputText');
const listContainer = document.getElementById('listContainer');
const navlist = document.querySelector('.navList'); // 
navlist.addEventListener('click', (e) => {
    const target = e.target;
    if (target.tagName === 'LI') {
        const page = target.getAttribute('data-page');
        if (page) {
            window.location.href = page; // This will load the new page
        }
    }
});
function AddTaskList() {
    if (inputText.value === '') {
        alert('Enter a Task!');
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = inputText.value;
        // Create a start date element and append it
        let startDate = new Date().toLocaleDateString();
        let startDateElement = document.createElement('button');
        startDateElement.textContent = startDate;
        startDateElement.setAttribute('class', 'startDate');
        startDateElement.style.marginLeft = '10px';
        li.appendChild(startDateElement);
        listContainer.appendChild(li);
        alert(`${inputText.value} has been added successfully!`);
        saveData();
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
        saveData();
    }
    inputText.value = '';
}
listContainer.addEventListener('click', (e) => {
    var _a, _b;
    const target = e.target;
    if (target.tagName === 'LI') {
        // Toggle the 'checked' class
        target.classList.toggle('checked');
        // If the task is checked (completed)
        if (target.classList.contains('checked')) {
            // Display the congratulatory message
            alert(`Congratulations! Task "${(_a = target.textContent) === null || _a === void 0 ? void 0 : _a.trim()}" has been completed successfully!`);
            // Create and show end date only if it's not already present
            if (!target.querySelector('.endDate')) {
                let endDate = new Date().toLocaleDateString();
                let endDateElement = document.createElement('button');
                endDateElement.textContent = endDate;
                endDateElement.setAttribute('class', 'endDate');
                target.appendChild(endDateElement);
            }
        }
        else {
            // When unchecked, remove the end date if needed (optional)
            let endDateElement = target.querySelector('.endDate');
            if (endDateElement) {
                endDateElement.remove();
            }
        }
        saveData();
    }
    else if (target.tagName === 'SPAN') {
        (_b = target.parentElement) === null || _b === void 0 ? void 0 : _b.remove();
        alert(`Task has been deleted successfully!`);
        saveData();
    }
});
function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}
function showTask() {
    const storedData = localStorage.getItem('data');
    if (storedData) {
        listContainer.innerHTML = storedData;
    }
}
showTask();
function hamburger() {
    const navList = document.querySelector('.navList');
    const btns = document.querySelector('.btns');
    // Toggle display for navList and btns
    if (navList.style.display === 'none' || navList.style.display === '') {
        navList.style.display = 'block'; // Show the nav list
        btns.style.display = 'block'; // Show the buttons
    }
    else {
        navList.style.display = 'none'; // Hide the nav list
        btns.style.display = 'none'; // Hide the buttons
    }
}
