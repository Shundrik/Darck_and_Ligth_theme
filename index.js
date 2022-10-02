import { arrayMenu } from './menu.js';


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const STORAGE_KEY = 'themeKey';

const checkBox = document.querySelector('.theme-switch__toggle');
const body = document.querySelector('body');

checkBox.addEventListener('change', onChange);
isTheme();

function onChange(e) {

  if (e.target.checked) {
    body.classList.remove('ligth-theme');
body.classList.add('dark-theme');
    localStorage.setItem(STORAGE_KEY, JSON.stringify(Theme.DARK));

  } else {
      body.classList.remove('dark-theme');
  body.classList.add('ligth-theme');
    localStorage.setItem(STORAGE_KEY, JSON.stringify(Theme.LIGHT))
  }

  
}

function isTheme() {
  const saveTheme = localStorage.getItem(STORAGE_KEY);
  if (!saveTheme) {
      body.classList.add('ligth-theme')
    localStorage.setItem(STORAGE_KEY, JSON.stringify(Theme.LIGHT));
  } else {
    const parseTheme = JSON.parse(saveTheme);
    if (parseTheme === 'dark-theme') {
      body.classList.add('dark-theme');
      checkBox.checked = true;
    
    }
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
