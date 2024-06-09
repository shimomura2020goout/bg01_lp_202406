//修正前
// const slider = document.querySelector('.slider');

// function activate(e) {
//   const items = document.querySelectorAll('.item');
//   e.target.matches('.next') && slider.append(items[0])
//   e.target.matches('.prev') && slider.prepend(items[items.length-1]);
// }

// document.addEventListener('click',activate,false);

//1回目の修正
// const slider = document.querySelector('.slider');

// function activate(e) {
//   const items = document.querySelectorAll('.item');
//   e.target.matches('.next') && slider.append(items[0])
//   e.target.matches('.prev') && slider.prepend(items[items.length-1]);
// }

// function changeBackground(e) {
//   if (e.target.closest('.item')) {
//     const items = document.querySelectorAll('.item');
//     slider.prepend(e.target.closest('.item'));
//   }
// }

// document.addEventListener('click', activate, false);
// slider.addEventListener('click', changeBackground, false);

//2回目の修正
// const slider = document.querySelector('.slider');

// function activate(e) {
//   const items = document.querySelectorAll('.item');
//   if (e.target.matches('.next')) {
//     slider.append(items[0]);
//   } else if (e.target.matches('.prev')) {
//     slider.prepend(items[items.length - 1]);
//   }
// }

// function changeBackground(e) {
//   const item = e.target.closest('.item');
//   if (item) {
//     const bgImage = item.style.backgroundImage;
//     document.body.style.backgroundImage = bgImage;
//     slider.append(item); // .nextの動きで切り替え
//   }
// }

// document.addEventListener('click', activate, false);
// slider.addEventListener('click', changeBackground, false);

const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  if (e.target.matches('.next')) {
    slider.append(items[0]);
  } else if (e.target.matches('.prev')) {
    slider.prepend(items[items.length - 1]);
  }
}

function changeBackground(e) {
  const item = e.target.closest('.item');
  if (item) {
    const bgImage = item.style.backgroundImage;
    document.body.style.backgroundImage = bgImage;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    slider.append(item); // .nextの動きで切り替え
  }
}

document.addEventListener('click', activate, false);
slider.addEventListener('click', changeBackground, false);