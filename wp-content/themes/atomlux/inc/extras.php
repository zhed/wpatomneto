<?php
/**
 * Custom functions that act independently of the theme templates
 *
 * Eventually, some of the functionality here could be replaced by core features
 *
 * @package atom
 * @since atom 1.0
 * @license GPL 2.0
 */

/**
 * Get our wp_nav_menu() fallback, wp_page_menu(), to show a home link.
 *
 * @since atom 1.0
 */
function atom_page_menu_args( $args ) {
	$args['show_home'] = true;
	return $args;
}
add_filter( 'wp_page_menu_args', 'atom_page_menu_args' );

/**
 * Adds custom classes to the array of body classes.
 *
 * @since atom 1.0
 */
function atom_body_classes( $classes ) {
	// Adds a class of group-blog to blogs with more than 1 published author
	if ( is_multi_author() ) {
		$classes[] = 'group-blog';
	}

	return $classes;
}
add_filter( 'body_class', 'atom_body_classes' );

/**
 * Filter in a link to a content ID attribute for the next/previous image links on image attachment pages
 *
 * @since atom 1.0
 */
function atom_enhanced_image_navigation( $url, $id ) {
	if ( ! is_attachment() && ! wp_attachment_is_image( $id ) )
		return $url;

	$image = get_post( $id );
	if ( ! empty( $image->post_parent ) && $image->post_parent != $id )
		$url .= '#main';

	return $url;
}
add_filter( 'attachment_link', 'atom_enhanced_image_navigation', 10, 2 );

/**
 * Filters wp_title to print a neat <title> tag based on what is being viewed.
 *
 * @since atom 1.0
 */
function atom_wp_title( $title, $sep ) {
	global $page, $paged;

	if ( is_feed() )
		return $title;

	// Add the blog name
	$title .= get_bloginfo( 'name' );

	// Add the blog description for the home/front page.
	$site_description = get_bloginfo( 'description', 'display' );
	if ( $site_description && ( is_home() || is_front_page() ) )
		$title .= " $sep $site_description";

	// Add a page number if necessary:
	if ( $paged >= 2 || $page >= 2 )
		$title .= " $sep " . sprintf( __( 'Page %s', 'atom' ), max( $paged, $page ) );

	return $title;
}
add_filter( 'wp_title', 'atom_wp_title', 10, 2 );

/**
 * Add the styles to set the size of the footer widgets
 * 
 * @todo generate responsive code
 */
function atom_footer_widget_style(){
	$widgets = wp_get_sidebars_widgets();
	if(empty($widgets['sidebar-footer'])) return;

	$count = count($widgets['sidebar-footer']);
	?><style type="text/css" id="atom-footer-widgets">#footer-widgets aside { width : <?php echo round(100/$count,3) ?>%; } </style> <?php
}
add_action('wp_head', 'atom_footer_widget_style', 15);