<?php
/**
 * Displays 
 * 
 * @package atom
 * @since atom 1.0
 * @license GPL 2.0
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class('post'); ?>>

	<div class="entry-main">
		<?php do_action('atom_entry_main_top') ?>


		<header class="entry-header">
			
			<?php atomlabs_show_featured();?>	
						
			<h1 class="entry-title"><a href="<?php the_permalink(); ?>" title="<?php echo esc_attr( sprintf( __( 'Permalink to %s', 'atom' ), the_title_attribute( 'echo=0' ) ) ); ?>" rel="bookmark"><?php the_title(); ?></a></h1>

			<?php if ( get_post_type() == 'post' ) : ?>
				<div class="entry-meta">
					<?php atom_posted_on(); ?>
				</div><!-- .entry-meta -->
			<?php endif; ?>

		</header><!-- .entry-header -->

		<div class="entry-content">
			<?php the_content( __( 'Continue reading <span class="meta-nav">&rarr;</span>', 'atom' ) ); ?>
			<?php wp_link_pages( array( 'before' => '<div class="page-links">' . __( 'Pages:', 'atom' ), 'after' => '</div>' ) ); ?>
		</div><!-- .entry-content -->

		<?php if(atom_get_post_categories()) : ?>
			<div class="entry-categories">
				<?php echo atom_get_post_categories() ?>
			</div>
		<?php endif; ?>

		<?php do_action('atom_entry_main_bottom') ?>

	</div>

</article><!-- #post-<?php the_ID(); ?> -->
