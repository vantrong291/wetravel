const visaLogo = require('../Assets/Images/Payments/visa.png')
const masterLogo = require('../Assets/Images/Payments/mastercard.png')
const paypalLogo = require('../Assets/Images/Payments/paypal.png')
const cashLogo = require('../Assets/Images/Payments/cash.jpg')
const agriLogo = require('../Assets/Images/Payments/agri.jpg')
const eximLogo = require('../Assets/Images/Payments/exim.png')
const mbLogo = require('../Assets/Images/Payments/mb.png')
const techLogo = require('../Assets/Images/Payments/tech.png')
const vibLogo = require('../Assets/Images/Payments/vib.png')
const vietcomLogo = require('../Assets/Images/Payments/vietcom.png')
const viettinLogo = require('../Assets/Images/Payments/vietin.png')
const bidvLogo = require('../Assets/Images/Payments/bidv.png')
const mariLogo = require('../Assets/Images/Payments/mari.png')
const vpLogo = require('../Assets/Images/Payments/vp.png')


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
    else if (str.includes('agri')) {
        return agriLogo
    }
    else if (str.includes('exim')) {
        return eximLogo
    }
    else if (str.includes('mb')) {
        return mbLogo
    }
    else if (str.includes('tech')) {
        return techLogo
    }
    else if (str.includes('vib')) {
        return vibLogo
    }
    else if (str.includes('vietcom')) {
        return vietcomLogo
    }
    else if (str.includes('viettin')) {
        return viettinLogo
    }
    else if (str.includes('bidv')) {
        return bidvLogo
    }
    else if (str.includes('vp')) {
        return vpLogo
    }
    else if (str.includes('mari')) {
        return mariLogo
    }
}
