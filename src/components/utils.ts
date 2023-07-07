export const getNumberWithSpace = (price: number): string =>
  price.toString().replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');

export const getNoun = (number: number, one: string, two: string, five: string): string => {
  let absNumber = Math.abs(number);

  absNumber %= 100;
  if (number >= 5 && number <= 20) {
    return five;
  }

  absNumber %= 10;
  if (absNumber === 1) {
    return one;
  }

  if (absNumber >= 2 && absNumber <= 4) {
    return two;
  }

  return five;
};
