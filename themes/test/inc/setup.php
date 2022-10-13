<?php

function ainego_scripts() {
    $directory = get_template_directory_uri()."\/css\/";
    // $directory_dev = get_template_directory_uri()."\/css-dev\/";

    wp_enqueue_style( 'header2-css', $directory . 'header.css');
    wp_enqueue_style( 'footer-css', $directory . 'footer.css');

    if(is_front_page()){
        
    } else if(is_404()) {       
    } else if(is_page_template('template-parts/home.php')){
        wp_enqueue_style( 'home-css', $directory . 'home.css');
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
