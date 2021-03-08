const carouselTranslation = document.querySelector('.carouselTranslation');
const carouselSlide = document.querySelectorAll('.carouselTranslation .carouselSlide');
const carouselButtons = document.querySelectorAll('.carouselNavBtn');
const numberOfDiv = carouselSlide.length;

  let currentSlide = 0;
  let translation = 0;

/**
 * @param evt 
 * 
 * The following function will allow us to do the following:
  - if we click the previous button and if the current slide is not the first one, then we slide (->) to the previous slide (currentSlide decrements)
  - otherwise if we click the next button and if the current slide is not the last one, then we slide (<-) to the next slide (currentSlide increaments)
 */
  function slide(evt) {
    if (evt.target.id === 'previous' && currentSlide !== 0)  {
      currentSlide -= 1;
      translation += 100;
    }
    else if (evt.target.id === 'next' && currentSlide !== numberOfDiv - 1) {
      currentSlide += 1;
      translation -= 100;
    }    

      carouselTranslation.style.transform = `translateX(${translation}%)`;
  }

carouselButtons.forEach(e => { e.addEventListener('click', slide) });


/* -------------------- Mobile Swipe slider --------------------- */

let fingerDown = 0;   

/**
 * @param evt 
 * 
 * This function allows us to pick up informations relative to the starting point about finger touch position
 */
    function firstFingerTouch(evt) {
      fingerDown = evt.touches[0].clientX;     
    };   


/**
 * @param evt 
 * 
 * This function allows us to determine whether we have a left or right swipe, and also go to the next or previous slide
 */
    function fingerSlide(evt) {
        // If there is no finger touch, we are not execting the next code
            if (!fingerDown) {
                return;
            }

            let fingerUp = evt.touches[0].clientX;                                    
            let fingerDistance = fingerDown - fingerUp;

            if ( fingerDistance > 0 && currentSlide !== numberOfDiv - 1 ) {
              currentSlide += 1;
              translation -= 100;
            }
            else if ( fingerDistance < 0 && currentSlide !== 0 ) {
              currentSlide -= 1;
              translation += 100;
            }

            carouselTranslation.style.transform = `translateX(${translation}%)`;
            fingerDown = 0;                                         
    };

carouselTranslation.addEventListener('touchstart', firstFingerTouch);        
carouselTranslation.addEventListener('touchmove', fingerSlide);    



