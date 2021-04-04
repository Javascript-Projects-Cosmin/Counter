// set initial counter to 0
let count = 0;

// select value and buttons
const value = document.querySelector("#value");

// the next variable, given it is defined by a query selector
//that captures multiple elements, is a NodeList. This is our
//old pal, the array, to which we can apply the for each loop
const btns = document.querySelectorAll(".btn") 

//while we could add events for each button, and it would work quite
//fine in this example, later on it might be a problem so let's cut to
//the root of it and go through the common class

btns.forEach(function (btn) {

  //Now, for each button which has the btn class, do the following
  //add a click event, which does the following
  btn.addEventListener("click", function (e) {

    //the styles variable grabs the e (take e as the button because of current target) and
    //takes it's classList (Which will show btn and increase/decrease/reset)
    const styles = e.currentTarget.classList;

    //The following is just a simple if else branch which tests what styles contains
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    
    //For an aesthetic reason, let's change the color of the counter on this event as well
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});