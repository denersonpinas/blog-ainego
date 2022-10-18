<?php

function ainego_scripts() {
    $directory = get_template_directory_uri()."\/assets\/";
    // $directory_dev = get_template_directory_uri()."\/css-dev\/";

    wp_enqueue_style( 'header-css', $directory . 'header.css');
    wp_enqueue_style( 'footer-css', $directory . 'footer.css');

    if(is_page_template('template-parts/home.php')){
        wp_enqueue_style( 'vars-css', $directory . 'css\/vars.css');
        wp_enqueue_style( 'home-css', $directory . 'css\/home.css');
    } else if (is_page_template('template-parts/calculadora.php')) {
        wp_enqueue_style( 'single-spotlight-js-css-teste', $directory ."css\/" . 'single-spotlight-js.css');
        wp_enqueue_style( 'spotlight-newsletter-css-teste', $directory ."css\/" . 'spotlight-newsletter.css');
        wp_enqueue_style( 'spotlight-calculadora-css-teste', $directory ."css\/" . 'calculadora.css');
        wp_enqueue_style( 'open-nuconta-qsn-js-css-teste', $directory ."css\/" . 'open-nuconta-qsn-js.css');
        wp_enqueue_style( 'slick-css','https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.7.1/slick.css');
        wp_enqueue_script( 'jquery-js-teste', $directory  . "js\/" . 'jquery.js');
        wp_enqueue_script( 'slick-slider-teste', $directory ."js\/" . 'slick.js');
        wp_enqueue_script( 'script-calculadora-teste', $directory  . "js\/" . 'calculadora-dividas.js');
        wp_enqueue_script( 'script-single-spotlight-teste', $directory  . "js\/" . 'single-spotlight.js');
    }
}
   


add_action( 'wp_enqueue_scripts', 'ainego_scripts' );
/** Update CSS and JS version */
function update_css_and_js_version( $src ) {
    $version = wp_get_theme()->get( 'Version' );
    $src = add_query_arg( 'ver', $version, $src );
    return esc_url( $src );
}

function update_version() {
    add_filter( 'style_loader_src', 'update_css_and_js_version', 9999 );
    add_filter( 'script_loader_src', 'update_css_and_js_version', 9999 );
}
add_action('init', 'update_version');
?>
