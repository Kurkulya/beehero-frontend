export const roundNumberToTen = (number) => {
    if (number >= 10000) {
        const fixedNumber = (number / 1000).toFixed(1);
        number = `${fixedNumber.charAt(fixedNumber.length - 1) === '0'
            ? fixedNumber.slice(0, fixedNumber.length - 2) : fixedNumber}K`;
    }
    return number;
};
