<?php 
    /*
        Template Name: Homepage
    */

    get_header();
?>

<section id="section-noticia">
    <div class="noticia-title">
        <h2 class="title-all-post">TODOS OS POSTS</h2>
        <img src="<?= get_template_directory_uri()?>/assets/image/borda-title.png" alt="" class="barra-title">
    </div>
    <div class="section-posts">
        <?php 
            $args = array(
                'post_type' => 'post'
            );

            $the_query = new WP_Query($args);

            if ($the_query -> have_posts()):
        ?>
        <div class="all-posts">
        <?php while ($the_query -> have_posts()):
            $the_query-> the_post();
            ?>
            <div class="post">
                <a href="<?= get_the_permalink(); ?>"> <?php the_post_thumbnail('post-thumbnail', array('class' => 'capa-post')); ?> </a>    
                <h3 class="title-post"><a href="<?= get_the_permalink(); ?>"><?= get_the_title(); ?></a></h3>
                <hr class="bar-post">
                <p class="author"><?= get_the_author(); ?></p>
                <p class="data-post">Out<?= get_the_date(' d, y'); ?></p>
            </div>                        
        <?php
            endwhile;
            endif;
        ?>
        </div>
        <div class="aside-posts">
            <div class="newslatter">
                <h4 class="title-newslatter">Newsletter</h4>
                <p class="paragrafo-newslatter">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <form class="form-newslatter" action="" method="post">
                    <label class="label-newslatter" for="newsEmail">E-mail</label>
                    <input class="input-newslatter" type="email" name="newsEmail" id="newsEmail" placeholder="exemplo@gmail.com">
                    <input class="btn-newslatter" type="submit" value="INSCREVER-SE">
                </form>
            </div>
            <div class="top-news">
                <span class="title-categoria-aside">TOP NEWS </span>
                <div class="post-top-news">
                    <img src="<?= get_template_directory_uri()?>/assets/image/capa-top-news.jpg" alt="" class="img-top-news">
                    <div class="content-top-news">
                        <h3 class="title-post">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
                        <p class="data-post">Jun 9, 2022 - 22 Coments</p>
                    </div>
                </div>
                <div class="post-top-news">
                    <img src="<?= get_template_directory_uri()?>/assets/image/capa-top-news.jpg" alt="" class="img-top-news">
                    <div class="content-top-news">
                        <h3 class="title-post">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
                        <p class="data-post">Jun 9, 2022 - 22 Coments</p>
                    </div>
                </div>
                <div class="post-top-news">
                    <img src="<?= get_template_directory_uri()?>/assets/image/capa-top-news.jpg" alt="" class="img-top-news">
                    <div class="content-top-news">
                        <h3 class="title-post">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
                        <p class="data-post">Jun 9, 2022 - 22 Coments</p>
                    </div>
                </div>
                <div class="post-top-news">
                    <img src="<?= get_template_directory_uri()?>/assets/image/capa-top-news.jpg" alt="" class="img-top-news">
                    <div class="content-top-news">
                        <h3 class="title-post">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
                        <p class="data-post">Jun 9, 2022 - 22 Coments</p>
                    </div>
                </div>
            </div>
            <div class="anuncio">
                <img src="<?= get_template_directory_uri()?>/assets/image/anuncio.jpg" alt="" class="anuncio-img">
            </div>
        </div>
    </div>
</section>
<?php 
    get_footer();
?>