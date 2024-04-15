const days = document.getElementById("days");
const hours = document.getElementById("hours");
const mins = document.getElementById("mins");
const seconds = document.getElementById("seconds");

const newYear = '18  may 2024';

function countTimer(){
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000;

    const daysCalc = Math.floor(totalSeconds / 3600 / 24);
    const hoursCalc = Math.floor(totalSeconds / 3600) % 24;
    const minsCalc = Math.floor(totalSeconds / 60) % 60;
    const secondsCalc = Math.floor(totalSeconds % 60);

    days.innerHTML = daysCalc;
    hours.innerHTML = hoursCalc;
    mins.innerHTML = minsCalc;
    seconds.innerHTML = secondsCalc;

}
countTimer();

setInterval(countTimer, 1000)

const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('contador-animation');
      }
    });
  });
  
  observer.observe(document.querySelector('.contador'));


  const observer2 = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('itinerario-animation');
      }
    });
  });
  
  observer2.observe(document.querySelector('.actividades'));

  const observer3 = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('vest-animation');
      }
    });
  });
  
  observer3.observe(document.querySelector('.nenesillos'));

  
  
  



