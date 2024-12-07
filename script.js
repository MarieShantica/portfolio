// Toggle the visibility and text content of the work section
document.addEventListener('DOMContentLoaded', () => {
    const seeWorkBtn = document.getElementById('see-work-btn');
    const workSection = document.getElementById('work-section');

    if (seeWorkBtn && workSection) {
        seeWorkBtn.addEventListener('click', function () {
            // Toggle visibility of the section
            workSection.classList.toggle('hidden');

            // Change button text based on section visibility
            if (workSection.classList.contains('hidden')) {
                seeWorkBtn.textContent = "See My Work";
            } else {
                seeWorkBtn.textContent = "Hide My Work";
            }
        });
    }
});
