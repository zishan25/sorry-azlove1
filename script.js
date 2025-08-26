const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

yesBtn.addEventListener("click", () => {
    question.innerHTML = "I love u";
    gif.src = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTNzZ24yZW12am4xcDZ2NW1mM21kMmVzeWlvZTFiNGx1azFtZXp0MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yc2pHdAoxVOrJ2m5Ha/giphy.gif";
});

// Make the No button move randomly close to the Yes button on hover
noBtn.addEventListener("mouseover", () => {
    const yesBtnRect = yesBtn.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();
    
    const offsetX = Math.random() * 60 - 30; // Random offset between -30px and +30px on the x-axis
    const offsetY = Math.random() * 60 - 30; // Random offset between -30px and +30px on the y-axis
    
    // Set new position for "No" button relative to the "Yes" button's position
    noBtn.style.position = "absolute";
    noBtn.style.left = `${yesBtnRect.left + offsetX}px`;
    noBtn.style.top = `${yesBtnRect.top + offsetY}px`;
});