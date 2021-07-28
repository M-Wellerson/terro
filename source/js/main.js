const superDiv = document.querySelector('.product-info-super');
const auto     = document.querySelector('.product-info-auto');
const product  = document.querySelector('#product');

superDiv.onmouseover = function() {
	product.className = 'hovered-green';
}
superDiv.onmouseout = function() {
	product.className = '';
}
auto.onmouseover = function() {
	product.className = 'hovered-auto';
}

auto.onmouseout = function() {
	product.className = '';
}