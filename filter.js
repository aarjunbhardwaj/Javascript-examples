const prices = [200,245,300,400,500,600,700];
// if price < 400
const newPriceTag = prices.filter((Elem,index)=>{
    return Elem<400;
});
console.log(newPriceTag);