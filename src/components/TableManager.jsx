import React, { useEffect, useState } from "react";
import BeerList from "./BeerList/BeerList";
import SearchField from "./Search/SearchField";
import Filters from "./Filters/Filters";
import BackendProvider from "../utils/BackendProvider";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const backendProvider = new BackendProvider("https://api.punkapi.com/v2/");

const useStyles = makeStyles({
  wrapperTable: {
    display: "grid",
    gridTemplateColumns: "1fr 5fr",
    gridColumnGap: "60px",
    margin: "100px 0px 10px 20px",
    height: "100%",
  },
});

export default function TableManager() {
  const classes = useStyles();
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
    <Grid container spacing={1} className={classes.app}>
      <SearchField
        onFilterData={handleChangeSearchField}
        searchField={searchField}
      />
      <Grid container direction="column" className={classes.wrapperTable}>
        <Filters
          onChangePageSize={setPageSize}
          onChangePageNumber={setPageNumber}
          pageSize={pageSize}
          pageNumber={pageNumber}
          submitFilters={submitFilters}
          className={classes.table_filters}
        />
        <Grid container item xs={12} spacing={3}>
          <BeerList beers={pageData} />
          {/* <PaginationFooter
            
            
            max_pages={max_pages}
          /> */}
        </Grid>
      </Grid>
    </Grid>
  );
}
