import Search from './js/model/Search';
import * as SearchViews from './js/view/SearchView';

import './css/style.css';

//Application state
const state = {};

const searchRecipe = async event => {
  //prevent brwoser default behavior
  event.preventDefault();

  //query string
  const query = SearchViews.getInput();

  if (query) {
    // new search
    state.search = await new Search(query);

    // Prepare UI FOR RESULT
    SearchViews.clearInputs();
    SearchViews.clearResultList();

    //Store result in state
    await state.search.getRecipes();

    //Prepare UI FOR DISPLAY
    console.log(state.search.results);
    SearchViews.renderResults(state.search.results);
  }
};
document.querySelector('.search__btn').addEventListener('click', searchRecipe);
