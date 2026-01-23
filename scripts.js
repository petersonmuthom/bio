function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}





const countersEl = document.querySelectorAll(".counter");
countersEl.forEach(counterEl => {
    counterEl.innerText = "0";
        incrementCounter();
    function incrementCounter(){
        let currentNum = +counterEl.innerText;
      const dataCeil = counterEl.getAttribute("data-ceil"); 
        const increment = dataCeil / 15;
        currentNum = Math.ceil(currentNum + increment);
        if(currentNum < dataCeil){
            counterEl.innerText = currentNum;
            setTimeout(incrementCounter, 50)        
          }else{
            counterEl.innerText = dataCeil;   
        }
    }
});




document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      let answer = button.nextElementSibling;
      let arrow = button.querySelector('.arrow');

      if (answer.style.display === 'block') {
        answer.style.display = 'none';
        arrow.style.transform = 'rotate(0deg)';
      } else {
        document.querySelectorAll('.faq-answer').forEach(ans => ans.style.display = 'none');
        document.querySelectorAll('.faq-question .arrow').forEach(arr => arr.style.transform = 'rotate(0deg)');

        answer.style.display = 'block';
        arrow.style.transform = 'rotate(90deg)';
      }
    });
  });