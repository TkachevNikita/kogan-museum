const items = document.querySelectorAll('.main__content');
    const btnNext = document.querySelector('.next');
    const btnPrev = document.querySelector('.prev');
    let index = 0;
    btnNext.addEventListener('click', () => {
      if (index != items.length - 1) {
        items[index].classList.add('hidden');
        index += 1;
        items[index].classList.remove('hidden');
      } else {
        items[index].classList.add('hidden');
        index = 0;
        items[index].classList.remove('hidden');
      }
    });

    btnPrev.addEventListener('click', () => {
      if (index != 0) {
        items[index].classList.add('hidden');
        index -= 1;
        items[index].classList.remove('hidden');
      } else {
        items[index].classList.add('hidden');
        index = items.length - 1;
        items[index].classList.remove('hidden');
      }
    });