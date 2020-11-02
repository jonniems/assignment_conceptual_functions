const calculateDiscountedPrice = function (totalAmount, discount) {
    if (totalAmount > 25) {
        return Math.round(totalAmount - discount);
    } else {
        return totalAmount;
    }
}

console.log(calculateDiscountedPrice(10.4, 2.2));