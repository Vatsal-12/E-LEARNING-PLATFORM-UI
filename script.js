// For marking course as completed
function markCompleted(course) {
    localStorage.setItem(course, 'completed');
    alert("Course marked as completed!");
}

// On progress page - update the progress display
window.onload = function() {
    if (document.getElementById('progressList')) {
        const courses = ['html', 'js', 'python'];
        courses.forEach(course => {
            let status = localStorage.getItem(course) === 'completed' ? 'Completed ✅' : 'Incomplete ❌';
            document.getElementById(course + '-status').textContent = status;
        });
    }
};
