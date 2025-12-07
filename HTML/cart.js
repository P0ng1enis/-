// Скрипт для страницы корзины

document.addEventListener('DOMContentLoaded', function() {
    const cartContent = document.getElementById('cartContent');
    
    // Отображение содержимого корзины
    function renderCart() {
        if (cart.length === 0) {
            cartContent.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-cart"></i>
                    <h2>Ваша корзина пуста</h2>
                    <p>Добавьте товары из каталога, чтобы сделать заказ</p>
                    <a href="catalog.html" class="cta-button">Перейти в каталог</a>
                </div>
            `;
            return;
        }
        
        let cartHTML = `
            <div class="cart-items">
        `;
        
        cart.forEach(item => {
            const product = products.find(p => p.id === item.id);
            const itemTotal = item.price * item.quantity;
            
            cartHTML += `
                <div class="cart-item" data-id="${item.id}">
                    <div class="cart-item-img">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="cart-item-details">
                        <h3>${item.name}</h3>
                        <div class="cart-item-price">${item.price.toLocaleString()} руб.</div>
                        <div class="cart-item-controls">
                            <div class="quantity-control">
                                <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                                <span class="quantity">${item.quantity} шт.</span>
                                <button class="quantity-btn increase" data-id="${item.id}">+</button>
                            </div>
                            <div class="item-total">${itemTotal.toLocaleString()} руб.</div>
                            <button class="remove-item" data-id="${item.id}">
                                <i class="fas fa-trash"></i> Удалить
                            </button>
                        </div>
                    </div>
                </div>
            `;
        });
        
        const totalAmount = getCartTotal();
        
        cartHTML += `
            </div>
            <div class="cart-summary">
                <h2>Итог заказа</h2>
                <div class="summary-row">
                    <span>Товары (${cart.reduce((sum, item) => sum + item.quantity, 0)} шт.)</span>
                    <span>${totalAmount.toLocaleString()} руб.</span>
                </div>
                <div class="summary-row">
                    <span>Доставка</span>
                    <span>Бесплатно</span>
                </div>
                <div class="summary-row total">
                    <span>Итого к оплате</span>
                    <span>${totalAmount.toLocaleString()} руб.</span>
                </div>
                <div style="margin-top: 30px;">
                    <a href="checkout.html" class="cta-button" style="display: block; text-align: center;">Перейти к оформлению</a>
                    <a href="catalog.html" class="btn-outline" style="display: block; text-align: center; margin-top: 15px;">Продолжить покупки</a>
                </div>
            </div>
        `;
        
        cartContent.innerHTML = cartHTML;
        
        // Добавляем обработчики событий
        addCartEventListeners();
    }
    
    // Добавление обработчиков событий для элементов корзины
    function addCartEventListeners() {
        // Увеличение количества
        document.querySelectorAll('.increase').forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                const item = cart.find(item => item.id === productId);
                
                if (item) {
                    item.quantity += 1;
                    localStorage.setItem('cart', JSON.stringify(cart));
                    updateCartCount();
                    renderCart();
                }
            });
        });
        
        // Уменьшение количества
        document.querySelectorAll('.decrease').forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                const item = cart.find(item => item.id === productId);
                
                if (item) {
                    if (item.quantity > 1) {
                        item.quantity -= 1;
                    } else {
                        // Удаляем товар, если количество становится 0
                        removeFromCart(productId);
                    }
                    localStorage.setItem('cart', JSON.stringify(cart));
                    updateCartCount();
                    renderCart();
                }
            });
        });
        
        // Удаление товара
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                removeFromCart(productId);
                renderCart();
            });
        });
    }
    
    // Инициализация страницы корзины
    function initCartPage() {
        renderCart();
    }
    
    // Запускаем инициализацию
    initCartPage();
});