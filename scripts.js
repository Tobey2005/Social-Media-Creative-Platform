const cursor - document.querySelector('.cursor-effect');


document.addEventListener('mousemove', e => {
    cursor.style.left = `${e.clientX - 75}px`; /* Center the effect */
    cursor.style.top = `${e.clientY - 75}px`;

    // Apply a clearing effect around the cursor
    overlay.style.clipPath = `circle(3px at ${e.clientX}px ${e.clientY}px)`;
}