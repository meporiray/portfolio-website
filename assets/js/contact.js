document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = "scale(1.1)";
        button.style.transition = "0.2s";
    });
    button.addEventListener('mouseout', () => {
        button.style.transform = "scale(1)";
    });
});