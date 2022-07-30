var items = document.querySelectorAll('.item');

items.forEach((item) => {
  item.addEventListener('click', () => {
    removeAcitveClass();
    item.classList.add('active');
  })
})

function removeAcitveClass() {

  items.forEach((item) => {
  item.classList.remove('active');
  })
}