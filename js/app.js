/* Ref HTMl */

const pages = document.querySelector('.card__header-text');
const price = document.querySelector('.price');
const range = document.querySelector('#range');
const progressBar = document.querySelector('.progressBar');

const calculePrice = (value) => {
    return new Promise((resolve, reject)=>{
        const basePage = value *2;
        const basePrice= (value * 0.32).toFixed(2);
       (value <= 100) ? 
       resolve({
            pagesView: basePage,
            price: basePrice
        }) :
        reject("Fail in calculation of price");
    })

}

range.addEventListener('change', async ({target}) => {
    const pageAndPrice = await calculePrice(target.value);
    pages.innerHTML= `<span class="card__header-text">${pageAndPrice.pagesView}k Pageviews</span>`
    price.innerHTML= `$ ${pageAndPrice.price}`;
    progressBar.style.width = target.value + '%';
})

