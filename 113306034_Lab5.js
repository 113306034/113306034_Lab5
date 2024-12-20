const mathInput = document.getElementById('mathGrade');
const englishInput = document.getElementById('englishGrade');
const submitBtn = document.getElementById('submitBtn');
const gradesTable = document.getElementById('gradesTable').querySelector('tbody');

submitBtn.addEventListener('click', () => {
    const mathGrade = parseFloat(mathInput.value);
    const englishGrade = parseFloat(englishInput.value);

    if (isNaN(mathGrade) || isNaN(englishGrade)) {
        alert('Please enter valid grades for both Math and English.');
        return;
    }

    const average = ((mathGrade + englishGrade) / 2).toFixed(2);

    const newRow = document.createElement('tr');
    const rowNumber = gradesTable.querySelectorAll('tr').length + 1;
    newRow.innerHTML = `
        <td>${rowNumber}</td>
        <td>${mathGrade}</td>
        <td>${englishGrade}</td>
        <td>${average}</td>
    `;
    gradesTable.appendChild(newRow);

    mathInput.value = '';
    englishInput.value = '';

    updateAverages();
});

function updateAverages() {
    const rows = gradesTable.querySelectorAll('tr');
    let totalMath = 0, totalEnglish = 0, totalOverall = 0;

    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        totalMath += parseFloat(cells[1].textContent);
        totalEnglish += parseFloat(cells[2].textContent);
        totalOverall += parseFloat(cells[3].textContent);
    });

    const rowCount = rows.length;

    document.getElementById('mathAvg').textContent = (totalMath / rowCount).toFixed(2);
    document.getElementById('englishAvg').textContent = (totalEnglish / rowCount).toFixed(2);
    document.getElementById('overallAvg').textContent = (totalOverall / rowCount).toFixed(2);
}
