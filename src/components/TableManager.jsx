import React, { useEffect, useState } from "react";
import BeerList from "./BeerList/BeerList";
import SearchField from "./Search/SearchField";
import Filters from "./Filters/Filters";
import PaginationFooter from "./Pagination/PaginationFooter";
import BackendProvider from "../utils/BackendProvider";

const backendProvider = new BackendProvider("https://api.punkapi.com/v2/");

export default function TableManager() {
  const [filteredData, setFilteredData] = useState([]);
  const [pageData, setPageData] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const max_pages = Math.round(filteredData.length / pageSize);

  function submitFilters(params) {
    setPageNumber(1);
    const queryRequest = params.reduce(
      (request, param) => request + `&${param}`
    );
    backendProvider.getBeersByParams(queryRequest).then((beers) => {
      setFilteredData(beers);
    });
  }

  function handleChangeSearchField(value) {
    setSearchField(value.trim());
  }
  useEffect(() => {
    setPageNumber(1);
    backendProvider.getBeersByName(searchField).then((beers) => {
      setFilteredData(beers);
    });
  }, [searchField]);

  useEffect(() => {
    backendProvider.getBeers().then((beers) => {
      setFilteredData(beers);
    });
  }, []);

  useEffect(() => {
    function sliceArrayForPagination() {
      const paginationValue = pageNumber * pageSize;
      return filteredData.slice(paginationValue - pageSize, paginationValue);
    }
    setPageData(sliceArrayForPagination());
  }, [pageNumber, pageSize, filteredData]);

  return (
    <div>
      <SearchField
        onFilterData={handleChangeSearchField}
        searchField={searchField}
      />
      <Filters submitFilters={submitFilters} />
      <BeerList beers={pageData} />
      <PaginationFooter
        onChangePageSize={setPageSize}
        onChangePageNumber={setPageNumber}
        pageSize={pageSize}
        pageNumber={pageNumber}
        max_pages={max_pages}
      />
    </div>
  );
}
