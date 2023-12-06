// set initial count
let count = 0;

//select buttons and value
const value = document.querySelector("#value");    
const btns = document.querySelectorAll(".btn");

// In forEach we pass in a callback function
btns.forEach(function(btn){
    // add eventlistener to all the buttons and access the event object "e"
    btn.addEventListener("click",function(e){
         // currentTarget shows which button is clicked
         // classList lists all the class defined for the button
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")){
            count --;
        }
        else if(styles.contains("increase")){
            count ++;
        }
        else{
            count = 0;
        }
        if(count > 0){
            value.style.color = "green";
        }
        if(count < 0){
            value.style.color = "red";
        }
        if(count === 0){
            value.style.color = "black";
        }
        value.textContent = count;
    });
});

