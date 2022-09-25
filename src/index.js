import { arrayMenu } from './menu.js';

const STORAGE_KEY = "themeKey";

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
// function checkTheme() {
// let isTheme = localStorage.getItem(STORAGE_KEY);
// if (isTheme) {
//   isTheme = JSON.parse(isTheme);
  
// }
// }

const checkBox = document.querySelector('.theme-switch__toggle');
const body = document.querySelector('body');
checkBox.addEventListener('change', onChange);

function onChange() {
  body.classList.toggle('dark-theme');
    localStorage.setItem(STORAGE_KEY, JSON.stringify(Theme.LIGTH));
  if (body.classList.contains('dark-theme')) {
     localStorage.setItem(STORAGE_KEY, JSON.stringify(Theme.DARK));
  }
   
 
}

function createMenu(arrayMenu) {
 return arrayMenu
    .map(
      ({ name, description, image, price, ingredients }) => {
        const list = ingredients.map(( ingredients ) => ingredients);
        // console.log(list)
        
        const markupIngredientsList = createIngredientsList(list);

        function createIngredientsList(list) {
          return list
            .map((ingredient) => `<li class="tag-list__item">${ingredient}</li>`)
            .join("");
        }

        return `<li class="menu__item">
        <article class="card">
          <img src="${image}" alt="${name}" class="card__image" />
          <div class="card__content">
            <h2 class="card__name">${name}</h2>
            <p class="card__price">
              <i class="material-icons"> monetization_on </i>${price} кредитов
            </p>

            <p class="card__descr">${description}</p>

            <ul class="tag-list">${markupIngredientsList}</ul>
          </div>

          <button class="card__button button">
            <i class="material-icons button__icon"> shopping_cart </i>В корзину
          </button>
        </article>
      </li>`
      })

.join('');
}
    
const markupMenu = createMenu(arrayMenu);
const menuEl = document.querySelector('ul');
menuEl.insertAdjacentHTML('beforeend', markupMenu);
