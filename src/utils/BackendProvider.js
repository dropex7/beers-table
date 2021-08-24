export default class BackendProvider {
  constructor(url) {
    this.baseUrl = url;
  }

  async fetchData(url) {
    try {
      const response = await fetch(url);
      const result = await response.json();
      return result;
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async getBeers(searchField, filters, pageNumber, pageSize) {
    const staticQueryParams = `page=${pageNumber}&per_page=${pageSize}&${filters}`;
    if (searchField !== "") {
      const queryParams = `beer_name=${searchField}&${staticQueryParams}`;
      return this.fetchData(`${this.baseUrl}beers?${queryParams}`);
    }
    return this.fetchData(`${this.baseUrl}beers?${staticQueryParams}`);
  }
}
