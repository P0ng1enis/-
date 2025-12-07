<?php
/**
 * Template Name: О нас
 */
get_header();
?>

<div class="container">
    <div class="about-content" style="padding: 3rem 0;">
        <h1 style="margin-bottom: 2rem; color: #1a1a2e;">О компании MusicShop</h1>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; margin-bottom: 3rem;">
            <div>
                <h2 style="color: #4361ee; margin-bottom: 1rem;">Наша история</h2>
                <p style="margin-bottom: 1rem;">
                    MusicShop был основан в 2010 году группой энтузиастов-музыкантов, 
                    которые хотели создать место, где каждый сможет найти свой идеальный инструмент.
                </p>
                <p>
                    За 10+ лет работы мы помогли тысячам музыкантов — от начинающих 
                    до профессионалов — подобрать инструменты для творчества.
                </p>
            </div>
            
            <div>
                <h2 style="color: #4361ee; margin-bottom: 1rem;">Наши ценности</h2>
                <ul style="list-style: none;">
                    <li style="margin-bottom: 0.5rem; padding-left: 1.5rem; position: relative;">
                        <span style="position: absolute; left: 0; color: #4cc9f0;">✓</span>
                        Качество инструментов
                    </li>
                    <li style="margin-bottom: 0.5rem; padding-left: 1.5rem; position: relative;">
                        <span style="position: absolute; left: 0; color: #4cc9f0;">✓</span>
                        Профессиональные консультации
                    </li>
                    <li style="margin-bottom: 0.5rem; padding-left: 1.5rem; position: relative;">
                        <span style="position: absolute; left: 0; color: #4cc9f0;">✓</span>
                        Гарантия на все товары
                    </li>
                    <li style="margin-bottom: 0.5rem; padding-left: 1.5rem; position: relative;">
                        <span style="position: absolute; left: 0; color: #4cc9f0;">✓</span>
                        Доставка по всей России
                    </li>
                </ul>
            </div>
        </div>
        
        <!-- Команда -->
        <h2 style="text-align: center; margin: 3rem 0; color: #1a1a2e;">Наша команда</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem;">
            <div style="text-align: center;">
                <div style="width: 150px; height: 150px; border-radius: 50%; background: linear-gradient(135deg, #4361ee, #4cc9f0); margin: 0 auto 1rem; display: flex; align-items: center; justify-content: center; color: white; font-size: 3rem;">
                    👨‍🎤
                </div>
                <h3>Алексей Иванов</h3>
                <p>Эксперт по гитарам</p>
            </div>
            
            <div style="text-align: center;">
                <div style="width: 150px; height: 150px; border-radius: 50%; background: linear-gradient(135deg, #4361ee, #4cc9f0); margin: 0 auto 1rem; display: flex; align-items: center; justify-content: center; color: white; font-size: 3rem;">
                    👩‍🎤
                </div>
                <h3>Мария Петрова</h3>
                <p>Специалист по клавишным</p>
            </div>
            
            <div style="text-align: center;">
                <div style="width: 150px; height: 150px; border-radius: 50%; background: linear-gradient(135deg, #4361ee, #4cc9f0); margin: 0 auto 1rem; display: flex; align-items: center; justify-content: center; color: white; font-size: 3rem;">
                    👨‍🎷
                </div>
                <h3>Дмитрий Сидоров</h3>
                <p>Мастер духовых инструментов</p>
            </div>
        </div>
    </div>
</div>

<?php get_footer(); ?>