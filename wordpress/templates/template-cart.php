<?php
/**
 * Template Name: Корзина
 */
get_header();
?>

<div class="container cart-container">
    <h1 style="margin-bottom: 2rem; color: #1a1a2e;">Корзина покупок</h1>
    
    <?php if (isset($_GET['empty'])): ?>
        <div style="background: #d4edda; color: #155724; padding: 1rem; border-radius: 5px; margin-bottom: 2rem;">
            Корзина пуста
        </div>
    <?php endif; ?>
    
    <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 3rem;">
        <!-- Список товаров -->
        <div>
            <table class="cart-table">
                <thead>
                    <tr>
                        <th>Товар</th>
                        <th>Цена</th>
                        <th>Количество</th>
                        <th>Итого</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div style="display: flex; align-items: center; gap: 1rem;">
                                <div style="width: 80px; height: 80px; background: linear-gradient(135deg, #4361ee, #4cc9f0); border-radius: 5px;"></div>
                                <div>
                                    <h4 style="margin: 0;">Гитара Fender Stratocaster</h4>
                                    <small>Артикул: GTR-001</small>
                                </div>
                            </div>
                        </td>
                        <td><?php echo musicshop_price(45000); ?></td>
                        <td>
                            <input type="number" value="1" min="1" style="width: 60px; padding: 0.3rem; text-align: center;">
                        </td>
                        <td><?php echo musicshop_price(45000); ?></td>
                        <td>
                            <button style="background: none; border: none; color: #dc3545; cursor: pointer;">✕</button>
                        </td>
                    </tr>
                    
                    <tr>
                        <td>
                            <div style="display: flex; align-items: center; gap: 1rem;">
                                <div style="width: 80px; height: 80px; background: linear-gradient(135deg, #7209b7, #f72585); border-radius: 5px;"></div>
                                <div>
                                    <h4 style="margin: 0;">Комплект струн</h4>
                                    <small>Артикул: ACC-012</small>
                                </div>
                            </div>
                        </td>
                        <td><?php echo musicshop_price(1200); ?></td>
                        <td>
                            <input type="number" value="2" min="1" style="width: 60px; padding: 0.3rem; text-align: center;">
                        </td>
                        <td><?php echo musicshop_price(2400); ?></td>
                        <td>
                            <button style="background: none; border: none; color: #dc3545; cursor: pointer;">✕</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            
            <div style="display: flex; justify-content: space-between; margin-top: 2rem;">
                <a href="<?php echo esc_url(get_permalink(get_page_by_path('catalog'))); ?>" class="btn" style="background: #6c757d;">Продолжить покупки</a>
                <a href="?empty=1" class="btn" style="background: #dc3545;">Очистить корзину</a>
            </div>
        </div>
        
        <!-- Итоги -->
        <div class="cart-summary">
            <h2 style="margin-bottom: 1.5rem; color: #1a1a2e;">Итого</h2>
            
            <div style="margin-bottom: 1.5rem;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                    <span>Товары (3)</span>
                    <span><?php echo musicshop_price(47400); ?></span>
                </div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                    <span>Доставка</span>
                    <span>Бесплатно</span>
                </div>
                <hr style="margin: 1rem 0;">
                <div style="display: flex; justify-content: space-between; font-size: 1.2rem; font-weight: bold;">
                    <span>Общая сумма</span>
                    <span style="color: #4361ee;"><?php echo musicshop_price(47400); ?></span>
                </div>
            </div>
            
            <a href="<?php echo esc_url(get_permalink(get_page_by_path('checkout'))); ?>" class="btn" style="width: 100%; text-align: center;">Перейти к оплате</a>
        </div>
    </div>
</div>

<?php get_footer(); ?>