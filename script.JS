 const gridLayout = document.getElementById('gridLayout');
    const lineLayout = document.getElementById('lineLayout');
    const productsContainer = document.getElementById('products');
 
    gridLayout.addEventListener('change', function () {
        if (gridLayout.checked) {
            productsContainer.classList.remove('line-layout');
            productsContainer.classList.add('product-container');
        }
    });
 
    lineLayout.addEventListener('change', function () {
        if (lineLayout.checked) {
            productsContainer.classList.remove('product-container');
            productsContainer.classList.add('line-layout');
        }
    });