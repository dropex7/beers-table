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
    margin: "80px 0px 10px 20px",
    height: "100%",
  },
});

export default function TableManager() {
  const classes = useStyles();
  const [filteredData, setFilteredData] = useState([]);
  const [filterParams, setFilterParams] = useState("");
  const [searchField, setSearchField] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [isNextPageExists, setIsNextPageExists] = useState(true);

  function submitFilters(params) {
    setPageNumber(1);
    setFilterParams(params);
  }

  function handleChangePageSize(value) {
    setPageNumber(1);
    setPageSize(value);
  }

  function handleChangeSearchField(value) {
    setPageNumber(1);
    setSearchField(value.trim());
  }

  useEffect(() => {
    backendProvider
      .getBeers(searchField, filterParams, pageNumber, pageSize)
      .then((beers) => {
        if (beers.length > 0) {
          setFilteredData(beers);
          if (beers.length === pageSize) {
            setIsNextPageExists(true);
          }
        } else {
          setIsNextPageExists(false);
          setPageNumber(pageNumber > 1 ? pageNumber - 1 : pageNumber);
        }
      });
  }, [searchField, pageNumber, pageSize, filterParams]);

  return (
    <Grid container spacing={1} className={classes.app}>
      <SearchField
        onFilterData={handleChangeSearchField}
        searchField={searchField}
      />
      <Grid container direction="column" className={classes.wrapperTable}>
        <Filters
          onChangePageSize={handleChangePageSize}
          onChangePageNumber={setPageNumber}
          onChangeNextPageExists={setIsNextPageExists}
          pageSize={pageSize}
          pageNumber={pageNumber}
          submitFilters={submitFilters}
          className={classes.table_filters}
          isNextPageExists={isNextPageExists}
        />
        <Grid container item xs={12} spacing={3}>
          <BeerList beers={filteredData} />
        </Grid>
      </Grid>
    </Grid>
  );
}
