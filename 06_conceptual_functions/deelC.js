const calculateDiscountedPrice = function (totalAmount, discount) {
    return Math.round(totalAmount - discount);
}

console.log(calculateDiscountedPrice(10.4, 2.2));