//when the document has loaded call this function
document.addEventListener("DOMContentLoaded", function() {    
  //It detect if  browser support for IntersectionObserver
  if ("IntersectionObserver" in window) {
    //get all the images
    const images = document.querySelectorAll('.lazy');   
    //it create an object using the constructor.
    let imageObserver = new IntersectionObserver(function(entries, observer) {
      //it go through each element
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          //select the image and add the src of  data-src, then delete lazy class
          let image = entry.target;
          const data = image.getAttribute('data-src');
          image.setAttribute('src', `${data}`);
          image.classList.remove("lazy");
          //let to absorb image
          imageObserver.unobserve(image);
        }
      });
    });
    //it go through each image and observe
    images.forEach(function(image) {
      imageObserver.observe(image);
    });
  } 
  //if browser doesn't support for IntersectionObserver, then it does it in a conventional way
  else {  
    let images = document.querySelectorAll('.lazy');    
    let timeOut = null;
    
    function lazyload () {
      if(timeOut) clearTimeout(timeOut);
      //set a timeout each 20 milliseconds
      timeOut = setTimeout(function() {
          //get the height of the window
          let scrollTop = window.pageYOffset;
          //it go through each image
          images.forEach(function(img) {
              if(img.offsetTop < (window.innerHeight + scrollTop)) {
                //select the image and add the src of  data-src, then delete lazy class
                const data = img.getAttribute('data-src');
                img.setAttribute('src', `${data}`);
                img.classList.remove('lazy');
              }
          });
          if(images.length == 0) { 
            //when images finish listen some change to call the function again
            document.removeEventListener('scroll', lazyload);
            window.removeEventListener('resize', lazyload);
            window.removeEventListener('orientationChange', lazyload);
          }
      }, 20);
    }

    //It listen some change
    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }
})