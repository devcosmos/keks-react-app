export const formatPrice = (price: number): string =>
  price.toString().replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
