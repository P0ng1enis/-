<?php
/**
 * MusicShop Theme Functions
 */

// Подключение стилей и скриптов
function musicshop_scripts() {
    // Основной стиль
    wp_enqueue_style('musicshop-style', get_stylesheet_uri());
    
    // Дополнительные стили
    wp_enqueue_style('musicshop-custom', get_template_directory_uri() . '/assets/css/custom.css');
    
    // jQuery (уже включен в WordPress)
    wp_enqueue_script('jquery');
    
    // Пользовательские скрипты
    wp_enqueue_script('musicshop-scripts', get_template_directory_uri() . '/assets/js/custom.js', array('jquery'), '1.0', true);
}
add_action('wp_enqueue_scripts', 'musicshop_scripts');

// Регистрация меню
function musicshop_register_menus() {
    register_nav_menus(array(
        'primary' => __('Основное меню', 'musicshop'),
        'footer' => __('Меню в подвале', 'musicshop')
    ));
}
add_action('after_setup_theme', 'musicshop_register_menus');

// Поддержка миниатюр
add_theme_support('post-thumbnails');

// Регистрация шаблонов страниц
function musicshop_page_templates($templates) {
    $templates['templates/template-home.php'] = 'Главная страница';
    $templates['templates/template-catalog.php'] = 'Каталог';
    $templates['templates/template-about.php'] = 'О нас';
    $templates['templates/template-cart.php'] = 'Корзина';
    $templates['templates/template-checkout.php'] = 'Подтверждение оплаты';
    return $templates;
}
add_filter('theme_page_templates', 'musicshop_page_templates');

// Вспомогательная функция для вывода цены
function musicshop_price($price) {
    return number_format($price, 0, ',', ' ') . ' ₽';
}