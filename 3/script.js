document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');

    yesBtn.addEventListener('click', () => {
        window.location.href = 'result.html';
    });

    noBtn.addEventListener('click', () => {
        window.location.href = 'mom_knows.html';
    });
});
