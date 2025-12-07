// Скрипт для страницы каталога

document.addEventListener('DOMContentLoaded', function() {
    const productsContainer = document.getElementById('productsContainer');
    const categoryFilters = document.getElementById('categoryFilters');
    const sortSelect = document.getElementById('sortSelect');
    const priceMinInput = document.getElementById('priceMin');
    const priceMaxInput = document.getElementById('priceMax');
    const paginationContainer = document.getElementById('pagination');
    
    // Параметры фильтрации
    let currentCategory = 'all';
    let currentSort = 'default';
    let currentMinPrice = 0;
    let currentMaxPrice = Infinity;
    let currentPage = 1;
    const itemsPerPage = 6;
    
    // Инициализация фильтров категорий
    function initCategoryFilters() {
        categories.forEach(category => {
            const filterOption = document.createElement('div');
            filterOption.className = `filter-option ${category.id === currentCategory ? 'active' : ''}`;
            filterOption.textContent = `${category.name} (${category.count})`;
            filterOption.dataset.category = category.id;
            
            filterOption.addEventListener('click', () => {
                // Удаляем активный класс у всех фильтров
                document.querySelectorAll('.filter-option').forEach(opt => {
                    opt.classList.remove('active');
                });
                
                // Добавляем активный класс к выбранному фильтру
                filterOption.classList.add('active');
                
                // Обновляем текущую категорию
                currentCategory = category.id;
                currentPage = 1;
                
                // Фильтруем товары
                filterAndRenderProducts();
            });
            
            categoryFilters.appendChild(filterOption);
        });
    }
    
    // Фильтрация товаров
    function filterProducts() {
        let filteredProducts = [...products];
        
        // Фильтрация по категории
        if (currentCategory !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.category === currentCategory);
        }
        
        // Фильтрация по цене
        filteredProducts = filteredProducts.filter(product => {
            return product.price >= currentMinPrice && product.price <= currentMaxPrice;
        });
        
        // Сортировка
        filteredProducts.sort((a, b) => {
            switch (currentSort) {
                case 'price-asc':
                    return a.price - b.price;
                case 'price-desc':
                    return b.price - a.price;
                case 'name-asc':
                    return a.name.localeCompare(b.name);
                case 'name-desc':
                    return b.name.localeCompare(a.name);
                case 'rating-desc':
                    return b.rating - a.rating;
                default:
                    return 0;
            }
        });
        
        return filteredProducts;
    }
    
    // Пагинация
    function paginateProducts(products) {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return products.slice(startIndex, endIndex);
    }
    
    // Обновление пагинации
    function updatePagination(totalItems) {
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        paginationContainer.innerHTML = '';
        
        if (totalPages <= 1) return;
        
        // Кнопка "Назад"
        if (currentPage > 1) {
            const prevButton = document.createElement('button');
            prevButton.className = 'pagination-btn';
            prevButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
            prevButton.addEventListener('click', () => {
                currentPage--;
                filterAndRenderProducts();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            paginationContainer.appendChild(prevButton);
        }
        
        // Номера страниц
        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement('button');
            pageButton.className = `pagination-btn ${i === currentPage ? 'active' : ''}`;
            pageButton.textContent = i;
            pageButton.addEventListener('click', () => {
                currentPage = i;
                filterAndRenderProducts();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            paginationContainer.appendChild(pageButton);
        }
        
        // Кнопка "Вперед"
        if (currentPage < totalPages) {
            const nextButton = document.createElement('button');
            nextButton.className = 'pagination-btn';
            nextButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
            nextButton.addEventListener('click', () => {
                currentPage++;
                filterAndRenderProducts();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            paginationContainer.appendChild(nextButton);
        }
    }
    
    // Отрисовка товаров
    function renderProducts(productsToRender) {
        productsContainer.innerHTML = '';
        
        if (productsToRender.length === 0) {
            productsContainer.innerHTML = `
                <div class="empty-catalog" style="grid-column: 1/-1; text-align: center; padding: 60px 0;">
                    <i class="fas fa-search" style="font-size: 3rem; color: var(--gray-light); margin-bottom: 20px;"></i>
                    <h3 style="color: var(--primary); margin-bottom: 10px;">Товары не найдены</h3>
                    <p style="color: var(--text-light); max-width: 500px; margin: 0 auto;">Попробуйте изменить параметры фильтрации</p>
                </div>
            `;
            return;
        }
        
        productsToRender.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <div class="product-img">
                    <img src="${product.image}" alt="${product.name}">
                    ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <div class="product-rating">
                        ${'★'.repeat(product.rating)}${'☆'.repeat(5 - product.rating)}
                    </div>
                    <div class="product-category">${categories.find(c => c.id === product.category)?.name || product.category}</div>
                    <div class="product-price">${product.price.toLocaleString()} руб.</div>
                    <button class="add-to-cart" data-id="${product.id}">В корзину</button>
                </div>
            `;
            
            productsContainer.appendChild(productCard);
        });
        
        // Обновляем кнопки "В корзине"
        updateAddToCartButtons();
    }
    
    // Фильтрация и отрисовка товаров
    function filterAndRenderProducts() {
        // Обновляем значения фильтров
        currentMinPrice = parseInt(priceMinInput.value) || 0;
        currentMaxPrice = parseInt(priceMaxInput.value) || Infinity;
        
        // Фильтруем товары
        const filteredProducts = filterProducts();
        
        // Пагинируем
        const paginatedProducts = paginateProducts(filteredProducts);
        
        // Отрисовываем товары
        renderProducts(paginatedProducts);
        
        // Обновляем пагинацию
        updatePagination(filteredProducts.length);
    }
    
    // Инициализация страницы
    function initCatalogPage() {
        // Проверяем параметры URL
        const urlParams = new URLSearchParams(window.location.search);
        const categoryParam = urlParams.get('category');
        
        if (categoryParam && categories.some(c => c.id === categoryParam)) {
            currentCategory = categoryParam;
            
            // Активируем соответствующий фильтр
            setTimeout(() => {
                const categoryFilter = document.querySelector(`.filter-option[data-category="${categoryParam}"]`);
                if (categoryFilter) {
                    document.querySelectorAll('.filter-option').forEach(opt => {
                        opt.classList.remove('active');
                    });
                    categoryFilter.classList.add('active');
                }
            }, 100);
        }
        
        // Инициализируем фильтры категорий
        initCategoryFilters();
        
        // Инициализируем сортировку
        sortSelect.addEventListener('change', function() {
            currentSort = this.value;
            currentPage = 1;
            filterAndRenderProducts();
        });
        
        // Инициализируем фильтры цены
        priceMinInput.addEventListener('input', function() {
            currentPage = 1;
            filterAndRenderProducts();
        });
        
        priceMaxInput.addEventListener('input', function() {
            currentPage = 1;
            filterAndRenderProducts();
        });
        
        // Первоначальная загрузка товаров
        filterAndRenderProducts();
    }
    
    // Запускаем инициализацию
    initCatalogPage();
});