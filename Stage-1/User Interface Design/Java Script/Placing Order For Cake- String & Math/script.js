function OrderCake(str) {
    var weight=(str.substring(0,4))/1000;
    var id=str.substring(str.length-3);
    var flavor=str.substring(4,str.length-3);
    return 'Your order for '+Math.round(weight)+' kg '+flavor+' cake has been taken. You are requested to pay Rs. '+Math.round(weight*450)+' on the order no '+id;

}