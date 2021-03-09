$( document ).ready( onReady );

let contestant = '';

function onReady() {
  $( '#start-game' ).on( 'click', runGame);
    
} // end onReady
console.log('Here are all the available people:', people);

function runGame() {
  let arr = randomizeArray(people);
  displayToDOM(arr);
  randomNameToDom(people);
  $( '#image-blocks' ).on( 'click', '.githubImages', foundRightImage);
} // end runGame

function displayToDOM( array ) {
  console.log( 'in displayToDOM', array);
  // loop through people
  for (let i = 0; i < array.length; i++) {
    // append each person's profile picture to the DOM
    $( '#image-blocks' ).append(`
    <div class = "parent" >
    <img class="githubImages" data-name=${array[i].name} src="https://github.com/${array[i].githubUsername}.png?size=250" alt="Profile image of ${array[i].name}">
    </div>
    `);
  } // end for
  $( '#image-blocks' ).fadeIn();
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
  // console.log($(this).data( 'name'));
  // console.log($( this ).position());
  let pos = $( this ).position();
  console.log(pos.top);
  console.log(pos.left);


  if( $( this ).data( 'name' ) === contestant) {
    alert( `Success!`);
    $( '#image-blocks' ).append(`<img class="checkbox" style="height:100px;width:100px;position:absolute;top:${pos.top + 160}px;left:${pos.left + 20}px" id="checkmark" src="./images/Check-mark-1.jpeg" alt="Green Check Mark">`);
    setTimeout(function(){$( '.checkbox').fadeOut()}, 2000);
    setTimeout(function(){clearDOM()}, 2000);
  }
  else {
    alert( `Do Better!`);
  }
  
} // end foundRightImage

function clearDOM() {
  $( '#image-blocks' ).fadeOut();
  $( '#image-blocks' ).empty();
  $( '.checkbox' ).empty();
  $( '.checkbox' ).remove();
  $( '#contestant' ).empty();
} // end clearDOM

function randomizeArray(array) {
  let randomArr = [];
  let random = randomNumber(0, array.length);
  let i = 0;
  while( randomArr.length < array.length) {
    if( randomArr.includes(array[random])) {
      random = randomNumber(0, array.length - 1);
    } // end if
    else {
      randomArr[i] = array[random];
      i++;
    } // end else  
  } // end for
  console.log(randomArr);
  return randomArr;
} // end randomizeArray
