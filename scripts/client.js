$( document ).ready( onReady );

function onReady() {
    displayToDOM(people);
    randomNameToDom(people);
} // end onReady
console.log('Here are all the available people:', people);

function displayToDOM( array ) {
  console.log( 'in displayToDOM');
  // loop through people
  for (let i = 0; i < array.length; i++) {
    // append each person's profile picture to the DOM
    $( '#image-blocks' ).append(`
    <div>
    <img class="githubImages" data-id=${i} src="https://github.com/${array[i].githubUsername}.png?size=250" alt="Profile image of ${array[i].name}">
    </div>
    `);
  } // end for
} // end displayToDOM

function randomNameToDom(array) {
  console.log( 'in randomName' );
  $( '#random-name' ).append(`${array[randomNumber(0, 10)].name}`)
} // end randomNameToDOM

function randomNumber(min, max){
  return Math.floor(Math.random() * (1 + max - min) + min);
}


