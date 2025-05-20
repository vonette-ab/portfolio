// Declare variable ot store navbar element
const navElement = document.getElementById('navbar');
// detect scroll event on document
document.addEventListener('scroll', function () {
    // console.log (window.scrollY);
    if (window.scrollY > 70) {
        // change navbar bg to blue
        navElement.style.backgroundColor = '#0779E4';
    } else {
        // change navbar bg to transparent
        navElement.style.backgroundColor = 'transparent';
    }
});