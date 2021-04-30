// The variable position is going to store Pacman's position at each time is called by a function
var position = 0;
// calculates automatically the width of the screen and stores it in a vairable 
let pageWidth = window.innerWidth;

//the array contains 4 images : right sided mouth opened (Pacman1.png), right sided mouth closed (Pacman2.png)

const pacArray = [
  ['./images/PacMan1.png', './images/PacMan2.png'],
  ['./images/PacMan3.png', './images/PacMan4.png'],
];

// the direction variable will determine if the images goes to the right(0) or if it goes to the left(1)
// 0 = left to right
// 1 = right to left (reverse)
var direction = 0;

// this variable will set the side of the face of the Pac man Image. If it is 0 'mouth opened', if it is 1 'mouth shot'
var focus = 0;

// As shown in the index.htm this function wil fire on the clic of the mouse and it wil excecute focus, direction and position of the image every interval of time.
function Run() {
  let img = document.getElementById('PacMan');   // the element with the id 'PacMan' in the HTML is obtained to be stored in a javascript variable called img
  let imgWidth = img.width; // we set the variable to store the value of the image width which will be useful to set the boudaries
  focus = (focus + 1) % 2; // the focus variable plays with the remainder, it starts with 0 and leaves a remainder of 1, next time it will leave a reminder of 0 and this will open and shut the mouth of pacman
  direction = checkPageBounds(direction, imgWidth, position, pageWidth); //Later this function is called 
  img.src = pacArray[direction][focus]; //we then establish the image to be taken from the pacArray at each specific moment taking the direction and focus as 2 indexes 
  if (direction) {                //if the direction is true or 1 it will go from right to left, therfore substracting 20 px everytime the function is called
    position -= 20; 
    img.style.left = position + 'px';     //then the final position will be printed on the screen
  } else {                        // if direction is false or 0 then it will go from left to right and therefore the position will add 20 px everytime the function is called
    position += 20;
    img.style.left = position + 'px';        // the final position will be printed on the screen
  }
  
}

 // we call the function to run every interval of 200 miliseconds 
setInterval(Run,200);

// This function will limit the space for the image to move and once it hits the limit it will change direction and focus
function checkPageBounds(direction, imgWidth, position, pageWidth) {

  if(position < 0){                               //if the position of the image is less than 0 which is the initial position, then we change the direction to the right (direction = 0) 
    direction = 0;
  } else if(position >= pageWidth - imgWidth ){
      direction = 1;                             //if the position goes further in value than the page width less than the image width, then we change the direction to the left (direction = 1)
  }

  return direction;  // finallly in this section we return the direction value 0 or 1, this will be useful on the Run function to set direction
}

