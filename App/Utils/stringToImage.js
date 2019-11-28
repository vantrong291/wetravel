const visaLogo = require('../Assets/Images/Payments/visa.png')
const masterLogo = require('../Assets/Images/Payments/mastercard.png')
const paypalLogo = require('../Assets/Images/Payments/paypal.png')
const cashLogo = require('../Assets/Images/Payments/cash.png')

export const stringToImage = (str) => {
    if (str.includes('visa')) {
        return visaLogo
    } else if (str.includes('master')) {
        return masterLogo
    } else if (str.includes('paypal')) {
        return paypalLogo
    } else if (str.includes('cash')) {
        return cashLogo
    }
}
