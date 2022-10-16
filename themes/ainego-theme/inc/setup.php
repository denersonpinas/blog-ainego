<?php

function ainego_scripts() {
    $directory = get_template_directory_uri()."\/assets\/";
    // $directory_dev = get_template_directory_uri()."\/css-dev\/";

    // wp_enqueue_style( 'header-css', $directory . 'header.css');
    // wp_enqueue_style( 'footer-css', $directory . 'footer.css');
    wp_enqueue_style( 'vars-css', $directory . 'css\/vars.css');

    if(is_page_template('template/home.php')){
        wp_enqueue_style( 'home-css', $directory . 'css\/header.css');
        wp_enqueue_script('home-js', $directory . 'js\/home.js', array(), '1.0.0');

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