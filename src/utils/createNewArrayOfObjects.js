export default function createNewArrayOfObjects(array, value, nameOfObj) {
  const indexOfObj = array.findIndex((obj) => obj.name === nameOfObj);
  const newArray = [...array];
  const objectFromArray = { ...newArray[indexOfObj] };
  objectFromArray.value = value;
  newArray[indexOfObj] = objectFromArray;
  return newArray;
}
