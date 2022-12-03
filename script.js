/* this is for the nav on mobile */

function openNav() {
    document.getElementById("Nav").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("Nav").style.height = "0%";
  }


    window.addEventListener('scroll', reveal)

    function reveal(){
      var reveals = document.querySelectorAll('.reveal')

    
      for (var i = 0; i < reveals.length; i++){

      var windowheight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 150;

      if (revealtop < windowheight - revealpoint){
        reveals[i].classList.add('act');
      }
      else{
        reveals[i].classList.remove('act');
      }
    }
    }

  const button = document.getElementById('button');

  button.addEventListener('click', function handleClick(event) {
    event.preventDefault();

    const inputs = document.querySelectorAll('#email, #title, #desc');

    inputs.forEach(input => {
      input.value = '';
    });
  });

  function alert(){
    alert("Thanks for the feedback!");
  }


  
  