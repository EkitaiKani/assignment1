/* this is for the nav on mobile */

function openNav() {
    document.getElementById("Nav").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("Nav").style.height = "0%";
  }

  if (document.URL.includes("index.html")){

    const time = setTimeout(play, 5000);

  function play() {
    let el = document.getElementsByClassName("static")
    el[0].className = "bg active"
  }

  const end = setTimeout(stop, 51000);

  function stop() {
    let el = document.getElementsByClassName("active")
    el[0].className = "bg static"
  }

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

    function submit(){
      document.getElementById("idform").reset();
    }

  
  