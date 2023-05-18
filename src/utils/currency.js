export const formatCurrency = (number) => {
    if (!number)
        return 'N/A';
    return Intl.NumberFormat('EN-US', {
        style: 'currency',
        maximumSignificantDigits: 21,
        currency: 'USD'
    }).format(number);
};
