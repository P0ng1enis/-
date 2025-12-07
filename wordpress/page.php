<?php
/**
 * Шаблон страницы по умолчанию
 */
get_header();
?>

<div class="container" style="padding: 3rem 0;">
    <?php
    while (have_posts()) :
        the_post();
        ?>
        <h1 style="margin-bottom: 2rem;"><?php the_title(); ?></h1>
        <div class="page-content">
            <?php the_content(); ?>
        </div>
        <?php
    endwhile;
    ?>
</div>

<?php get_footer(); ?>