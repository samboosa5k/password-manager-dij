// Check if value is defined
const isDefined = (value: any) => {
  return typeof value !== 'undefined';
};

const isNull = (value: any) => {
  return JSON.stringify(value) === 'null';
};

export { isDefined, isNull };
