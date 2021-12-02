const $listContainer = document.querySelector('.list-container');
const $list = document.querySelector('.list');
const $ul = document.querySelector('ul');

function listSetup(element) {
  let timeout = null;
  element.onmouseenter = function () {
    timeout = setTimeout(() => {
      $ul.classList.remove('listBox');
    }, 1000);
  };

  $listContainer.onmouseleave = function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      $ul.classList.add('listBox');
    }, 500);
  };
}

document.addEventListener('DOMContentLoaded', listSetup($list));
