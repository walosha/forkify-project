import { elements } from './base';

export const getInput = () => elements.searchInput.value;

export const clearInputs = () => (elements.searchInput.value = '');

const limitRecipeTitle = (title, limit = 17) => {
  if (title.length >= limit) {
    const newTitle = [];
    title.split(' ').reduce((acc, cur) => {
      if (acc + cur.length <= limit) {
        newTitle.push(cur);
      }

      return acc + cur.length;
    }, 0);
    return `${newTitle.join(' ')}...`;
  }
  return title;
};

export const clearResultList = () => {
  elements.resultList.innerHTML = '';
};

const displayRecipe = ({ recipe_id, image_url, publisher, title }) => {
  let html = `<li>
                    <a class="results__link results__link--active" href=${recipe_id}>
                        <figure class="results__fig">
                            <img src=${image_url} alt=${title}>
                        </figure>
                        <div class="results__data">
                            <h4 class="results__name">${limitRecipeTitle(
                              title
                            )}</h4>
                            <p class="results__author">${publisher}</p>
                        </div>
                    </a>
                </li>`;
  elements.resultList.insertAdjacentHTML('beforeend', html);
};

export const renderResults = recipes => recipes.forEach(displayRecipe);
