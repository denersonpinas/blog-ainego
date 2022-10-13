<?php 

function ainego_setup() { 
	add_theme_support( 'post-thumbnails' );
	add_theme_support('amp', array(	'comments_live_list' => true));
	add_theme_support('html5',array('search-form'));
	add_theme_support( 'title-tag' );
	add_post_type_support( 'post', 'page-attributes' );

	register_nav_menus( array(
		'header_menu' => esc_html__( 'Header menu', 'ainego' ),
		'footer_menu' => esc_html__( 'Footer menu', 'ainego' ),
	) );
}

add_action( 'after_setup_theme', 'ainego_setup' );


require get_template_directory() . '/inc/setup.php';

?>