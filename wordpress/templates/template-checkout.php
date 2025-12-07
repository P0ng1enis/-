<?php
/**
 * Template Name: Подтверждение оплаты
 */
get_header();
?>

<div class="container" style="padding: 4rem 0; max-width: 800px;">
    <div style="text-align: center; margin-bottom: 3rem;">
        <div style="width: 100px; height: 100px; background: #28a745; border-radius: 50%; margin: 0 auto 2rem; display: flex; align-items: center; justify-content: center; font-size: 3rem; color: white;">
            ✓
        </div>
        <h1 style="color: #1a1a2e; margin-bottom: 1rem;">Заказ успешно оформлен!</h1>
        <p style="font-size: 1.1rem; color: #666;">
            Спасибо за ваш заказ. Номер вашего заказа: <strong>#MS-<?php echo rand(1000, 9999); ?></strong>
        </p>
    </div>
    
    <div style="background: #f8f9fa; padding: 2rem; border-radius: 10px; margin-bottom: 2rem;">
        <h2 style="color: #4361ee; margin-bottom: 1.5rem;">Детали заказа</h2>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
            <div>
                <h3 style="font-size: 1rem; color: #666; margin-bottom: 0.5rem;">Информация о заказе</h3>
                <p>Дата: <?php echo date('d.m.Y'); ?></p>
                <p>Статус: В обработке</p>
                <p>Способ оплаты: Карта онлайн</p>
            </div>
            
            <div>
                <h3 style="font-size: 1rem; color: #666; margin-bottom: 0.5rem;">Доставка</h3>
                <p>Способ: Курьерская доставка</p>
                <p>Адрес: г. Москва, ул. Примерная, д. 123</p>
                <p>Ожидаемая дата: <?php echo date('d.m.Y', strtotime('+3 days')); ?></p>
            </div>
        </div>
        
        <div style="border-top: 1px solid #ddd; padding-top: 1.5rem;">
            <h3 style="font-size: 1rem; color: #666; margin-bottom: 1rem;">Состав заказа</h3>
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                <span>Гитара Fender Stratocaster × 1</span>
                <span><?php echo musicshop_price(45000); ?></span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                <span>Комплект струн × 2</span>
                <span><?php echo musicshop_price(2400); ?></span>
            </div>
            <div style="display: flex; justify-content: space-between; font-weight: bold; margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #ddd;">
                <span>Итого</span>
                <span><?php echo musicshop_price(47400); ?></span>
            </div>
        </div>
    </div>
    
    <div style="text-align: center;">
        <p style="margin-bottom: 2rem;">
            Мы отправили подтверждение заказа на вашу электронную почту.<br>
            С вами свяжется наш менеджер для уточнения деталей доставки.
        </p>
        
        <div style="display: flex; gap: 1rem; justify-content: center;">
            <a href="<?php echo esc_url(home_url('/')); ?>" class="btn">На главную</a>
            <a href="<?php echo esc_url(get_permalink(get_page_by_path('catalog'))); ?>" class="btn btn-secondary">Продолжить покупки</a>
        </div>
    </div>
</div>

<?php get_footer(); ?>