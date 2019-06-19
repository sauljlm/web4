(function () {
  const concert = document.querySelector('.concert');
  function init() {
    const _tl = new TimelineMax();
    _tl
    .set('.concert',{ease: Back.easeOut.config(1), y: 350, onComplete:steam})
	  .to('.concert', 1.2,{ease: Back.easeOut.config(1), y: 0})
  }

  function steam() {
    const interval = setInterval(function() {
        const steam = document.createElement('div')
        steam.setAttribute('class', 'steam')

        let left =  Math.floor(Math.random() * 40) + 30;
        steam.style.left = `${left}%`;

        let direction = Math.floor(Math.random() * 2) + 0;
        if (direction > 0.2) {
            direction = -90
        } else {
            direction = 90
        }
        concert.appendChild(steam)
        const _tl = new TimelineMax()
        .to(steam, 5,{ease: Power0.easeNone, y: -400})
        .to(steam, 5,{opacity:1}, -0.2)
        .to(steam, 4,{rotation: direction, scale:5}, -0.4)
    }, 500)
  }

  window.addEventListener("load", function(event) {
    init();
  });
}());