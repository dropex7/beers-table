function convertInputsToQueryParams(inputParams) {
  return inputParams
    .map((item) => (item.value ? `${item.name}=${item.value}` : null))
    .filter(Boolean);
}

function convertSlidersToQueryParams(sliderParams) {
  const slidParams = [];
  sliderParams.forEach((obj) => {
    slidParams.push({
      gt: { name: `${obj.name}_gt`, value: obj.value[0] },
      lt: { name: `${obj.name}_lt`, value: obj.value[1] },
    });
  });
  return slidParams.map((param) => {
    let resultParam = [];
    Object.keys(param).forEach((key) => {
      if (param[key].value) {
        resultParam.push(`${param[key].name}=${param[key].value}`);
      }
    });
    return resultParam;
  });
}

function convertDateToQueryParams(beforeDate, afterDate) {
  const queryBeforeDateParams = `brewed_before=${
    beforeDate.getUTCMonth() + 1
  }-20${beforeDate.getYear() - 100}`;
  const queryAfterDateParams = `brewed_after=${afterDate.getUTCMonth() + 1}-20${
    afterDate.getYear() - 100
  }`;
  return `${queryBeforeDateParams}&${queryAfterDateParams}`;
}

export default function convertFiltersToParams(
  sliderParams,
  inputParams,
  beforeDate,
  afterDate
) {
  let resultParams = "";
  resultParams += convertDateToQueryParams(beforeDate, afterDate);
  convertSlidersToQueryParams(sliderParams).forEach((slParam) => {
    resultParams += `${slParam[0]}&`;
    resultParams += slParam[1] ? `${slParam[1]}&` : "";
  });

  convertInputsToQueryParams(inputParams).forEach(
    (inputParam) => (resultParams += `${inputParam}&`)
  );
  return resultParams;
}
