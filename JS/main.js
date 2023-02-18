const card1 = document.getElementById('card1');

const { width, height } = card1.getBoundingClientRect();
const halfWidth = width / 2;
const halfHeight = height / 2;

card1.addEventListener('mousemove', event => {
    card1.style.transition = 'none';
    const  {offsetX, offsetY} = event;
    const rotationX = ((offsetX - halfWidth) / halfWidth) * 8;
    const rotationY = ((offsetY - halfHeight) / halfHeight) * 8;
    console.log(rotationY);
    card1.style.transform  = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
})

card1.addEventListener('mouseleave', () => {
    card1.style.transition = 'transform .3s ease-in-out';
    card1.style.transform = 'rotateX(0deg) rotateY(0deg)';
})







window.addEventListener("deviceorientation",function(event) {
    const rotationX = Math.round(event.beta);
    const rotationY = Math.round(event.gamma);
    card1.style.transform  = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
}, true);