// Общие данные и функции для всего сайта

// Данные о товарах
const products = [
    {
        id: 1,
        name: "Fender Stratocaster American Professional",
        category: "guitars",
        price: 89999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh6Bs7qNfO3nHoR6n-E5MdZgs4iB3kJtQB5A&s",
        rating: 5,
        badge: "Хит",
        description: "Легендарная электрогитара с тремя синглами, кленовым грифом и двумя хамбакерами."
    },
    {
        id: 2,
        name: "Yamaha P-125 Digital Piano",
        category: "keyboards",
        price: 68999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZPuHSjC2cr6V08MK4mMfMyncByWsbRk_BGw&s",
        rating: 4,
        badge: null,
        description: "Цифровое пианино с 88 взвешенными клавишами и встроенными тембрами."
    },
    {
        id: 3,
        name: "Pearl Export Drum Set",
        category: "drums",
        price: 125999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmHAbhGVpBb4YF2NFiuuZIbRij89szGm4wWw&s",
        rating: 5,
        badge: "Новинка",
        description: "Полная барабанная установка 5-ти частей с тарелками и педалью."
    },
    {
        id: 4,
        name: "Stentor Student Violin",
        category: "strings",
        price: 32999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6kLF1WNQmFsQY0Inp5ehO-8W8Ej0mO9t8zw&s",
        rating: 4,
        badge: null,
        description: "Скрипка для начинающих с полным комплектом: смычок, канифоль, футляр."
    },
    {
        id: 5,
        name: "Gibson Les Paul Standard",
        category: "guitars",
        price: 149999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOdJKzbeyqWojP8XFfe4vOsBkRoUPQ3auT4Q&s",
        rating: 5,
        badge: "Премиум",
        description: "Культовая электрогитара с хамбакерами BurstBucker, махагоновым корпусом."
    },
    {
        id: 6,
        name: "Roland FP-30X Digital Piano",
        category: "keyboards",
        price: 78999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiUs24zbJ-O-yeU1S8dYsfdFnuDz7DfJ1PzA&s",
        rating: 4,
        badge: null,
        description: "Портативное цифровое пианино с Bluetooth и встроенными обучающими функциями."
    },
    {
        id: 7,
        name: "Shure SM58 Dynamic Microphone",
        category: "accessories",
        price: 8999,
        image: "https://doctorhead.ru/upload/dev2fun.imagecompress/webp/resize_cache/iblock/a3c/asy2qxlo5i3rmwk6rasbmnzajtaoq5x2/688_688_1/shure_sm58_1.webp",
        rating: 5,
        badge: "Выбор про",
        description: "Легендарный динамический микрофон для вокала и инструментов."
    },
    {
        id: 8,
        name: "Yamaha YAS-280 Alto Saxophone",
        category: "wind",
        price: 112999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5XdODcVt-b1JtE8RfN-aqy07Ab0jGew4iLQ&s",
        rating: 4,
        badge: null,
        description: "Альт-саксофон для студентов и продвинутых музыкантов."
    },
    {
        id: 9,
        name: "Ibanez RG550 Electric Guitar",
        category: "guitars",
        price: 75999,
        image: "https://skifmusic.ru/thumbs/31/e4/600x600_1_normal_c0b6b1b1100f70eb6bed9133ac98.webp",
        rating: 4,
        badge: null,
        description: "Электрогитара для металла и рока с двумя хамбакерами и тремоло."
    },
    {
        id: 10,
        name: "Korg Minilogue XD",
        category: "keyboards",
        price: 89999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTt02dZmpdbbQ3DeB1oia9sKMQZ1PXp3-55A&s",
        rating: 5,
        badge: "Новинка",
        description: "Аналоговый синтезатор с 4 голосами полифонии и цифровым осциллятором."
    },
    {
        id: 11,
        name: "Ludwig Breakbeats Drum Kit",
        category: "drums",
        price: 68999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLpxXFyYqDgsyCZnxFgv5Iijxjbd2vFXMmzQ&s",
        rating: 4,
        badge: null,
        description: "Компактная барабанная установка для небольших площадок и репетиций."
    },
    {
        id: 12,
        name: "Fender Player Precision Bass",
        category: "guitars",
        price: 79999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwFlQRGgbYw8UwH_CFcOUwrkiWYjIllI0EWw&s",
        rating: 4,
        badge: null,
        description: "Бас-гитара с одним хамбакером, кленовым грифом и современной электроникой."
    }
];

// Категории товаров
const categories = [
    { id: 'all', name: 'Все товары', count: products.length },
    { id: 'guitars', name: 'Гитары', count: products.filter(p => p.category === 'guitars').length },
    { id: 'keyboards', name: 'Клавишные', count: products.filter(p => p.category === 'keyboards').length },
    { id: 'drums', name: 'Ударные', count: products.filter(p => p.category === 'drums').length },
    { id: 'strings', name: 'Струнные', count: products.filter(p => p.category === 'strings').length },
    { id: 'wind', name: 'Духовые', count: products.filter(p => p.category === 'wind').length },
    { id: 'accessories', name: 'Аксессуары', count: products.filter(p => p.category === 'accessories').length }
];

// Корзина
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Функция для инициализации корзины
function initCart() {
    updateCartCount();
    
    // Инициализация мобильного меню
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    }
}

// Функция для обновления счетчика корзины
function updateCartCount() {
    const cartCountElements = document.querySelectorAll('.cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    cartCountElements.forEach(element => {
        element.textContent = totalItems;
    });
}

// Функция для добавления товара в корзину
function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        showNotification('Товар не найден!', 'error');
        return;
    }
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showNotification(`"${product.name}" добавлен в корзину!`);
    
    // Обновляем кнопки "В корзине"
    updateAddToCartButtons();
}

// Функция для удаления товара из корзины
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showNotification('Товар удален из корзины');
    
    // Обновляем кнопки "В корзине"
    updateAddToCartButtons();
}

// Функция для обновления количества товара
function updateCartItemQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = quantity;
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
        }
    }
}

// Функция для получения общей суммы корзины
function getCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Функция для обновления кнопок "В корзине"
function updateAddToCartButtons() {
    document.querySelectorAll('.add-to-cart').forEach(button => {
        const productId = parseInt(button.getAttribute('data-id'));
        const inCart = cart.some(item => item.id === productId);
        
        if (inCart) {
            button.textContent = 'В корзине';
            button.classList.add('in-cart');
        } else {
            button.textContent = 'В корзину';
            button.classList.remove('in-cart');
        }
    });
}

// Функция для отображения уведомлений
function showNotification(message, type = 'success') {
    // Удаляем предыдущие уведомления
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => {
        notification.remove();
    });
    
    // Создаем новое уведомление
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Добавляем стили в зависимости от типа
    if (type === 'error') {
        notification.style.backgroundColor = 'var(--danger)';
        notification.style.color = 'white';
    } else if (type === 'warning') {
        notification.style.backgroundColor = 'var(--warning)';
        notification.style.color = 'white';
    }
    
    document.body.appendChild(notification);
    
    // Анимация появления
    setTimeout(() => {
        notification.style.transform = 'translateY(0)';
        notification.style.opacity = '1';
    }, 10);
    
    // Удаление уведомления через 3 секунды
    setTimeout(() => {
        notification.style.transform = 'translateY(100px)';
        notification.style.opacity = '0';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// Функция для переключения мобильного меню
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (!mobileMenu) return;
    
    if (mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        setTimeout(() => {
            mobileMenu.innerHTML = '';
        }, 300);
    } else {
        // Получаем текущую страницу для выделения активного пункта меню
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        mobileMenu.innerHTML = `
            <div class="mobile-menu-content">
                <ul>
                    <li><a href="index.html" ${currentPage === 'index.html' ? 'class="active"' : ''}>Главная</a></li>
                    <li><a href="catalog.html" ${currentPage === 'catalog.html' ? 'class="active"' : ''}>Каталог</a></li>
                    <li><a href="about.html" ${currentPage === 'about.html' ? 'class="active"' : ''}>О нас</a></li>
                    <li><a href="cart.html" ${currentPage === 'cart.html' ? 'class="active"' : ''}>
                        <i class="fas fa-shopping-cart"></i> Корзина 
                        <span class="cart-count">${cart.reduce((sum, item) => sum + item.quantity, 0)}</span>
                    </a></li>
                </ul>
            </div>
        `;
        
        mobileMenu.classList.add('active');
        
        // Закрытие меню при клике на ссылку
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });
        });
    }
}

// Функция для закрытия мобильного меню при клике вне его
document.addEventListener('click', (e) => {
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    
    if (mobileMenu && mobileMenuToggle && 
        !mobileMenu.contains(e.target) && 
        !mobileMenuToggle.contains(e.target) && 
        mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
    }
});

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    initCart();
    
    // Инициализация кнопок "В корзину" на страницах с товарами
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            addToCart(productId);
        }
    });
    
    // Обработка навигации для всех страниц
    const navLinks = document.querySelectorAll('nav a, .mobile-menu-content a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Если это не внешняя ссылка и не якорная ссылка
            if (!this.getAttribute('href').startsWith('http') && 
                !this.getAttribute('href').startsWith('#') &&
                !this.getAttribute('href').startsWith('mailto') &&
                !this.getAttribute('href').startsWith('tel')) {
                
                // Сохраняем текущую позицию прокрутки
                sessionStorage.setItem('scrollPosition', window.pageYOffset);
            }
        });
    });
    
    // Восстановление позиции прокрутки при загрузке страницы
    const savedPosition = sessionStorage.getItem('scrollPosition');
    if (savedPosition) {
        window.scrollTo(0, parseInt(savedPosition));
        sessionStorage.removeItem('scrollPosition');
    }
});

// Экспортируем функции для использования в других файлах
window.products = products;
window.categories = categories;
window.cart = cart;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateCartItemQuantity = updateCartItemQuantity;
window.getCartTotal = getCartTotal;
window.showNotification = showNotification;