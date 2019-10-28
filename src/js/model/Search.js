import foodToFork, { API_KEY } from '../api/foodToFork';

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getRecipes() {
    try {
      const res = await foodToFork.get(
        `/search?key=${API_KEY}&q=${this.query}`
      );
      this.results = await res.data.recipes;
    } catch (error) {
      alert(error);
    }
  }
}
