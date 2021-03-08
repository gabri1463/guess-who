$( document ).ready( onReady );

let contestant = '';

function onReady() {
    displayToDOM(people);
    randomNameToDom(people);
    console.log('here');
    $( '#image-blocks' ).on( 'click', '.githubImages', foundRightImage);
} // end onReady
console.log('Here are all the available people:', people);

function displayToDOM( array ) {
  console.log( 'in displayToDOM');
  // loop through people
  for (let i = 0; i < array.length; i++) {
    // append each person's profile picture to the DOM
    $( '#image-blocks' ).append(`
    <div>
    <img class="githubImages" data-name=${array[i].name} src="https://github.com/${array[i].githubUsername}.png?size=250" alt="Profile image of ${array[i].name}">
    </div>
    `);
  } // end for
} // end displayToDOM

function randomNameToDom(array) {
  console.log( 'in randomName' );
  let random = [randomNumber(0, 9)];
  $( '#contestant' ).append(
    `
    <h3>Select <span id="random-name" data-id="${random}">${array[random].name}</span> from the images</h3>
    `
  );

  contestant = array[random].name;
} // end randomNameToDOM

function randomNumber(min, max){
  return Math.floor(Math.random() * (1 + max - min) + min);
}

function foundRightImage() {
  console.log( 'in foundRight' );
  console.log($(this).data( 'name'));
  if( $( this ).data( 'name' ) === contestant) {
    alert( `Success! That is ${$( this ).data( 'name' )}`)
  }
  else {
    alert( `Do Better!`)
  }

  
} // end foundRightImage

