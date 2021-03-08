$( document ).ready( onReady );

function onReady() {
    displayToDOM(people);
} // end onReady
console.log('Here are all the available people:', people);

function displayToDOM( array ) {
  console.log( 'in displayToDOM');
  // loop through people
  for (let i = 0; i < array.length; i++) {
    // append each person's profile picture to the DOM
    $( '#image-blocks' ).append(`
    <div>
    <img src="https://github.com/${array[i].githubUsername}.png?size=250" alt="Profile image of ${array[i].name}">
    </div>
    `);
  } // end for
} // end displayToDOM


