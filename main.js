const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modal-message');

function showErrorModal() {
  modal.classList.remove('hidden');
  modalMessage.textContent = 'Oops! Something went wrong.';
  setTimeout(() => {
    modal.classList.add('hidden');
  }, 3000);
}
const like = document.querySelectorAll('.like-glyph')

like.forEach(function (button) {
  button.addEventListener('click', handleLike);
});

function handleLike(event) {
  const heart = event.target;
  mimicServerCall()
    .then(function (response) {
      if (response === 'success') {
        heart.classList.add('activated-heart');
        heart.innerHTML = FULL_HEART;
      } else {
        showErrorModal();
      }
    })
    .catch(error => {
      showErrorModal()
    });
}




function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
