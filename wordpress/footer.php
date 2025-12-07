    </main>
    
    <footer class="site-footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>MusicShop</h3>
                    <p>Лучшие музыкальные инструменты для профессионалов и любителей.</p>
                </div>
                
                <div class="footer-section">
                    <h3>Контакты</h3>
                    <p>Телефон: +7 (999) 123-45-67</p>
                    <p>Email: info@musicshop.ru</p>
                    <p>Адрес: г. Москва, ул. Музыкальная, 123</p>
                </div>
                
                <div class="footer-section">
                    <h3>Быстрые ссылки</h3>
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'footer',
                        'container' => false,
                        'menu_class' => 'footer-menu'
                    ));
                    ?>
                </div>
            </div>
            
            <div class="copyright">
                <p>&copy; <?php echo date('Y'); ?> MusicShop. Все права защищены.</p>
            </div>
        </div>
    </footer>
    
    <?php wp_footer(); ?>
</body>
</html>