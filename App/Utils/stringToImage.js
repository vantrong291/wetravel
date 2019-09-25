const visaLogo = require('../Assets/Images/Payments/visa.png')
const masterLogo = require('../Assets/Images/Payments/mastercard.png')
const paypalLogo = require('../Assets/Images/Payments/paypal.png')

export const stringToImage = (str) => {
  if(str.includes('visa')) {
    return visaLogo
  }
  else if (str.includes('master')) {
    return masterLogo
  }
  else if (str.includes('paypal')) {
    return paypalLogo
  }

}