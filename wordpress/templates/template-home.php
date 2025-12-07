<?php
/**
 * Template Name: Главная страница
 */
get_header();
?>

<!-- Hero Section -->
<section class="hero">
    <div class="container">
        <h1>Добро пожаловать в мир музыки</h1>
        <p>Широкий выбор музыкальных инструментов, оборудования и аксессуаров от ведущих мировых брендов</p>
        <a href="<?php echo esc_url(get_permalink(get_page_by_path('catalog'))); ?>" class="btn">В каталог</a>
    </div>
</section>

<!-- Featured Products -->
<section class="featured-products">
    <div class="container">
        <h2 style="text-align: center; margin: 3rem 0 2rem; color: #1a1a2e;">Популярные товары</h2>
        
        <div class="products-grid">
            <?php
            // Пример вывода товаров (в реальном проекте нужно использовать WooCommerce или кастомный пост-тайп)
            $featured_products = array(
                array('name' => 'Гитара Fender Stratocaster', 'price' => '45000', 'img' => 'guitar.jpg'),
                array('name' => 'Цифровое пианино Yamaha', 'price' => '65000', 'img' => 'piano.jpg'),
                array('name' => 'Барабанная установка Pearl', 'price' => '120000', 'img' => 'drums.jpg'),
                array('name' => 'Скрипка Stradivarius', 'price' => '89000', 'img' => 'violin.jpg'),
            );
            
            foreach ($featured_products as $product) {
                echo '
                <div class="product-card">
                    <div class="product-img">
                        <img src="' . get_template_directory_uri() . '/assets/images/' . $product['img'] . '" alt="' . $product['name'] . '">
                    </div>
                    <div class="product-info">
                        <h3>' . $product['name'] . '</h3>
                        <div class="price">' . musicshop_price($product['price']) . '</div>
                        <button class="btn" style="width: 100%">В корзину</button>
                    </div>
                </div>';
            }
            ?>
        </div>
    </div>
</section>

<!-- About Section -->
<section class="about-preview" style="background: #f8f9fa; padding: 4rem 0;">
    <div class="container">
        <div style="max-width: 800px; margin: 0 auto; text-align: center;">
            <h2 style="margin-bottom: 1.5rem; color: #1a1a2e;">О нашем магазине</h2>
            <p style="font-size: 1.1rem; margin-bottom: 2rem;">
                Мы занимаемся продажей музыкальных инструментов уже более 10 лет. 
                Наша команда профессиональных музыкантов поможет вам подобрать 
                идеальный инструмент для любых целей.
            </p>
            <a href="<?php echo esc_url(get_permalink(get_page_by_path('about'))); ?>" class="btn btn-secondary">Подробнее о нас</a>
        </div>
    </div>
</section>

<?php get_footer(); ?>