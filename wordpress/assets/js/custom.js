// Пользовательские скрипты для темы MusicShop

jQuery(document).ready(function($) {
    // Анимация добавления в корзину
    $('.btn').on('click', function(e) {
        if ($(this).text().includes('В корзину')) {
            e.preventDefault();
            $(this).text('Добавлено!');
            $(this).css('background', '#28a745');
            
            setTimeout(() => {
                $(this).text('В корзину');
                $(this).css('background', '');
            }, 2000);
            
            // Здесь можно добавить AJAX запрос для добавления в корзину
        }
    });
    
    // Обновление количества в корзине
    $('.cart-table input[type="number"]').on('change', function() {
        const price = $(this).closest('tr').find('td:nth-child(2)').text();
        const quantity = $(this).val();
        // Логика пересчета суммы
    });
    
    // Плавная прокрутка для якорей
    $('a[href^="#"]').on('click', function(e) {
        if ($(this).attr('href') === '#') return;
        
        e.preventDefault();
        const target = $(this).attr('href');
        
        $('html, body').animate({
            scrollTop: $(target).offset().top - 100
        }, 500);
    });
});