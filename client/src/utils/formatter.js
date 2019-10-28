export const getFormattedPrice = amount => amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
export const getFormattedDecimals = decimals => decimals === 0 ? '00' : decimals;
export const formattedCurrency = {
    'ARS': '$',
    'USD': 'U$S',
    'UY': '$U'
}
//TODO: MOVE THIS OBJECT TO A CONSTANTS FILE
export const statusValues = {
    'new': 'Nuevo',
    'used': 'Usado'
}