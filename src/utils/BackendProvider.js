export default class BackendProvider {
  constructor(url) {
    this.baseUrl = url;
  }

  async fetchData(url) {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  }

  async getBeers() {
    return this.fetchData(`${this.baseUrl}beers`);
  }

  async getBeersByName(name) {
    if (name !== "") {
      return this.fetchData(`${this.baseUrl}beers?beer_name=${name}`);
    }
    return this.fetchData(`${this.baseUrl}beers`);
  }
}
