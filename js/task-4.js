const deliveryChina = 100;
const deliveryChile = 250;
const deliveryAustralia = 170;
const deliveryJamaica = 120;

function getShippingCost(country) {
  switch (country) {
    case 'China':
      return `Shipping to ${country} will cost ${deliveryChina} credits`;
    case 'Chile':
      return `Shipping to ${country} will cost ${deliveryChile} credits`;
    case 'Australia':
      return `Shipping to ${country} will cost ${deliveryAustralia} credits`;
    case 'Jamaica':
      return `Shipping to ${country} will cost ${deliveryJamaica} credits`;
    default:
      return `Sorry, there is no delivery to your country`;
  }
}

console.log(getShippingCost('Australia')); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost('Germany')); // "Sorry, there is no delivery to your country"
console.log(getShippingCost('China')); // "Shipping to China will cost 100 credits"
console.log(getShippingCost('Chile')); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost('Jamaica')); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost('Sweden')); // "Sorry, there is no delivery to your country"
