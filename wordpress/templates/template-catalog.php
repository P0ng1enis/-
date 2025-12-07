<?php
/**
 * Template Name: Каталог
 */
get_header();
?>

<div class="container">
    <h1 style="padding: 2rem 0; color: #1a1a2e;">Каталог инструментов</h1>
    
    <!-- Фильтры -->
    <div class="catalog-filters" style="margin-bottom: 2rem; padding: 1.5rem; background: #f8f9fa; border-radius: 10px;">
        <h3 style="margin-bottom: 1rem;">Фильтры</h3>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <select style="padding: 0.5rem; border-radius: 5px;">
                <option>Все категории</option>
                <option>Гитары</option>
                <option>Клавишные</option>
                <option>Ударные</option>
                <option>Смычковые</option>
                <option>Духовые</option>
            </select>
            
            <select style="padding: 0.5rem; border-radius: 5px;">
                <option>По популярности</option>
                <option>По цене (возрастание)</option>
                <option>По цене (убывание)</option>
                <option>По новизне</option>
            </select>
            
            <input type="text" placeholder="Поиск..." style="padding: 0.5rem; border-radius: 5px; border: 1px solid #ddd;">
        </div>
    </div>
    
    <!-- Сетка товаров -->
    <div class="products-grid">
        <?php
        $catalog_products = array(
            array('name' => 'Акустическая гитара', 'price' => '15000', 'category' => 'Гитары'),
            array('name' => 'Электрогитара Gibson', 'price' => '85000', 'category' => 'Гитары'),
            array('name' => 'Бас-гитара', 'price' => '32000', 'category' => 'Гитары'),
            array('name' => 'Синтезатор Korg', 'price' => '45000', 'category' => 'Клавишные'),
            array('name' => 'Аккордеон', 'price' => '78000', 'category' => 'Клавишные'),
            array('name' => 'Электронная ударная установка', 'price' => '95000', 'category' => 'Ударные'),
            array('name' => 'Саксофон', 'price' => '65000', 'category' => 'Духовые'),
            array('name' => 'Флейта', 'price' => '12000', 'category' => 'Духовые'),
            array('name' => 'Виолончель', 'price' => '145000', 'category' => 'Смычковые'),
        );
        
        foreach ($catalog_products as $product) {
            echo '
            <div class="product-card">
                <div class="product-img">
                    <div style="height: 200px; background: linear-gradient(135deg, #4361ee, #4cc9f0); display: flex; align-items: center; justify-content: center; color: white; font-size: 2rem;">
                        🎵
                    </div>
                </div>
                <div class="product-info">
                    <span style="font-size: 0.8rem; color: #666; background: #f0f0f0; padding: 0.2rem 0.5rem; border-radius: 3px;">' . $product['category'] . '</span>
                    <h3>' . $product['name'] . '</h3>
                    <div class="price">' . musicshop_price($product['price']) . '</div>
                    <button class="btn" style="width: 100%">В корзину</button>
                </div>
            </div>';
        }
        ?>
    </div>
</div>

<?php get_footer(); ?>