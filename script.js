function computePrelim() {
    const quizzes = parseFloat(document.getElementById('quizzes').value);
    const assignments = parseFloat(document.getElementById('assignments').value);
    const labActivities = parseFloat(document.getElementById('labActivities').value);
    const pe = parseFloat(document.getElementById('pe').value);

    const cs = (0.6 * quizzes) + (0.2 * assignments) + (0.2 * labActivities);
    const pg = (0.5 * cs) + (0.5 * pe);

    document.getElementById('prelimGrade').value = pg.toFixed(2);  
    document.getElementById('prelimResult').innerText = `Prelim Grade: ${pg.toFixed(2)}`;  
}


function computeMidterm() {
    const pg = parseFloat(document.getElementById('prelimGrade').value);
    const tmg = parseFloat(document.getElementById('tmg').value);

    const mg = (1/3 * pg) + (2/3 * tmg);

    document.getElementById('midtermGrade').value = mg.toFixed(2);  
    document.getElementById('midtermResult').innerText = `Midterm Grade: ${mg.toFixed(2)}`;  
}


function computeFinal() {
    const mg = parseFloat(document.getElementById('midtermGrade').value);
    const tfg = parseFloat(document.getElementById('tfg').value);

    const fg = (1/3 * mg) + (2/3 * tfg);

    document.getElementById('finalResult').innerText = `Final Grade: ${fg.toFixed(2)}`;  
}
