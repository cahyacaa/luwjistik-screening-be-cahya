exports.status ={
    OUT_DELVERY:'Out for delivery',
    PROCESSED: 'Processed at warehouse',
    PICKED_UP: 'Order picked up'
};

exports.ordersConstant = (category) => {
    return Object.keys(category).map(key => category[key]);
};