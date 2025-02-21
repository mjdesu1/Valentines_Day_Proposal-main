function nextPage() {
    window.location.href = "yes.html";
}

function moveButton() {
    var x = Math.random() * (window.innerWidth - document.getElementById('noButton').offsetWidth);
    var y = Math.random() * (window.innerHeight - document.getElementById('noButton').offsetHeight);
    document.getElementById('noButton').style.left = `${x}px`;
    document.getElementById('noButton').style.top = `${y}px`;
}

function changeYesColor() {
    document.getElementById('yesButton').style.backgroundColor = '#4CAF50';
}

function resetYesColor() {
    document.getElementById('yesButton').style.backgroundColor = '#008CBA';
}

function showConfetti() {
    const confettiContainer = document.createElement('div');
    confettiContainer.classList.add('confetti');
    document.body.appendChild(confettiContainer);
    
    for (let i = 0; i < 100; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti-piece');
        confettiPiece.style.left = Math.random() * window.innerWidth + 'px';
        confettiPiece.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confettiContainer.appendChild(confettiPiece);
    }
    setTimeout(() => confettiContainer.remove(), 3000);
}

function changeYesText() {
    document.getElementById('yesButton').innerText = 'You Chose Wisely!';
}
