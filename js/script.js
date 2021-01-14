let picture = document.querySelectorAll('a');
let mainImg = document.querySelector('#big img');
for (let i = 0; i < picture.length; i++) {
  $(picture[i]).click(function (e) {
    e.preventDefault()
    $(mainImg).stop().fadeOut(300)
    setTimeout(() => {
      $(mainImg).stop().fadeIn(450).attr("src", picture[i].href)
    }, 450);
  })

}

