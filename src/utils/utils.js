export const createNewArrayOfObjects = (tempArray, value, fieldName) => {
  const index = tempArray.findIndex((obj) => obj.name === fieldName);
  let items = [...tempArray];
  let item = {
    ...items[index],
  };
  item.value = value;
  items[index] = item;
  return items;
};

export const convertFiltersToParams = (sliderElements, filterInputs) => {
  const abv_index = sliderElements.findIndex(
    (element) => element.name === "abv"
  );
  const abv_query_gt = sliderElements[abv_index].value[0]
    ? `abv_gt=${sliderElements[abv_index].value[0]}`
    : "";
  const abv_query_lt = `abv_lt=${sliderElements[abv_index].value[1]}`;
  const ibu_query_gt = sliderElements[1].value[0]
    ? `ibu_gt=${sliderElements[1].value[0]}`
    : "";
  const ibu_query_lt = `ibu_lt=${sliderElements[1].value[1]}`;
  const ebc_query_gt = sliderElements[2].value[0]
    ? `ebc_gt=${sliderElements[2].value[0]}`
    : "";
  const ebc_query_lt = `ebc_lt=${sliderElements[2].value[1]}`;
  const yeast_query = filterInputs[0].value
    ? `yeast=${filterInputs[0].value}`
    : "";
  const hops_query = filterInputs[1].value
    ? `hops=${filterInputs[1].value}`
    : "";
  const malt_query = filterInputs[2].value
    ? `malt=${filterInputs[2].value}`
    : "";
  const food_query = filterInputs[3].value
    ? `food=${filterInputs[3].value}`
    : "";
  return [
    abv_query_gt,
    abv_query_lt,
    ibu_query_gt,
    ibu_query_lt,
    ebc_query_gt,
    ebc_query_lt,
    yeast_query,
    hops_query,
    malt_query,
    food_query,
  ].filter((el) => !!el);
};
