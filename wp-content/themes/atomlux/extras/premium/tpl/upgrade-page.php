<?php
global $siteorigin_premium_info;
$theme = basename( get_template_directory() );
?>

<div class="wrap" id="theme-upgrade">
	<form id="theme-upgrade-info" method="post" action="<?php echo esc_url( add_query_arg( 'action', 'enter-order' ) ) ?>" target="_blank">
		<p>
			<?php
			printf(
				__( "After you pay for %s Premium, we'll email you an order number to your <strong>PayPal email address</strong>. ", 'atom' ) ,
				ucfirst( $theme )
			);
			printf(
				__( "Use <a href='%s' target='_blank'>this form</a> if you don't receive your order number in the next 15 minutes. ", 'atom' ) ,
				'http://siteorigin.com/orders/'
			);
			_e( 'To be sure, check your spam folder.', 'atom' );
			?>
		</p>

		<label><strong><?php _e( 'Order Number', 'atom' ) ?></strong></label>
		<input type="text" class="regular-text" name="order_number" />
		<input type="submit" value="<?php esc_attr_e( 'Enable Upgrade', 'atom' ) ?>" />
		<?php wp_nonce_field( 'save_order_number', '_upgrade_nonce' ) ?>
	</form>

	<a href="#" id="theme-upgrade-already-paid" class="button"><?php _e( 'Already Paid?', 'atom' ) ?></a>

	<div id="icon-themes" class="icon32"><br></div>
	<h2><?php echo !empty($siteorigin_premium_info['premium_title']) ? $siteorigin_premium_info['premium_title'] : __('Premium Upgrade', 'atom') ?></h2>

	<?php if( empty($siteorigin_premium_info) ) : ?>

		<p><?php printf(__( "The premium version of this theme is no longer available. If you need any help, please contact <a href='http://siteorigin.com/#support'>SiteOrigin support</a>.", 'atom' ),ucfirst( $theme )); ?></p>

	<?php else:  ?>

		<div class="left-column">

			<?php if( !empty($siteorigin_premium_info['premium_video_poster']) ) : // Only load the video iFrame after the video is clicked ?>
				<div id="video-wrapper" style="background-image: url(<?php echo esc_url($siteorigin_premium_info['premium_video_poster']) ?>)">
					<?php if(!empty($siteorigin_premium_info['premium_video_id'])) : ?>
						<a href="http://player.vimeo.com/video/<?php echo intval($siteorigin_premium_info['premium_video_id']) ?>?title=0&byline=0&portrait=0&autoplay=1" target="_blank" id="click-to-play" data-video-id="<?php echo intval($siteorigin_premium_info['premium_video_id']) ?>" target="_blank"></a>
					<?php else : ?>
						<div class="placeholder"></div>
					<?php endif; ?>
				</div>
			<?php endif; ?>

			<p class="premium-summary">
				<?php echo $siteorigin_premium_info['premium_summary'] ?>
			</p>

			<div id="features">
				<?php foreach ( $siteorigin_premium_info['features'] as $feature ) : ?>
					<div class="feature clearfix">
						<?php if(!empty($feature['image'])) : ?><img src="<?php echo $feature['image'] ?>" /><?php endif; ?>
						<h3><?php echo $feature['heading'] ?></h3>
						<p><?php echo $feature['content'] ?></p>
					</div>
				<?php endforeach; ?>
			</div>

		</div>

		<div class="right-column">
			<form method="get" action="<?php echo esc_url( $siteorigin_premium_info['buy_url'] ) ?>" id="purchase-form" target="_blank">

				<p class="download">
					<a href="<?php echo esc_url( $siteorigin_premium_info['buy_url'] ) ?>?amount=15" class="buy-button variable-pricing-submit">
						<span><?php _e('Buy Now', 'atom') ?></span><em>$15</em>
						<input type="hidden" name="amount" value="15" >
					</a>
				</p>

				<div class="support-message">
					<p><?php _e("Although we appreciate and support all our premium users, our support staff prioritize orders of <strong>$15</strong> or more. Support on this order might take longer.", 'atom') ?></p>
				</div>

				<p class="description">
					<?php printf( __("You choose the price, so you can pay what %s is worth to you.", 'atom'), ucfirst($theme) ) ?>
				</p>

				<div class="options hide-if-no-js">
					<label><input type="radio" name="variable_pricing_option" value="10"> <strong>$10</strong> <?php _e('Building your site on a budget', 'atom') ?></label>
					<label><input type="radio" name="variable_pricing_option" value="15" <?php checked(true) ?>> <strong>$15</strong> <?php _e("A fair price for a powerful theme", 'atom') ?></label>
					<label><input type="radio" name="variable_pricing_option" value="20"> <strong>$20</strong> <?php _e("Our sincere thanks", 'atom') ?></label>
					<label><input type="radio" name="variable_pricing_option" value="35"> <strong>$35</strong> <?php _e("We'll go that extra mile for you", 'atom') ?></label>
					<label><input type="radio" name="variable_pricing_option" value="50"> <strong>$50</strong> <?php _e("A huge contribution to its development", 'atom') ?></label>
					<label><input type="radio" name="variable_pricing_option" value="custom" class="custom-price" > <strong><?php _e('Custom', 'atom') ?></strong> <input type="number" name="variable_pricing_custom" value="15" placeholder="$5+" min="5"> </label>
				</div>
				<div class="options hide-if-js">
					<p><?php _e('Please enable Javascript to change pricing', 'atom') ?></p>
				</div>

				<p class="description choose-description">
					<?php _e("We offer a 60 day full refund if you're not happy with your purchase", 'atom') ?>
				</p>

			</form>

			<?php if(!empty($siteorigin_premium_info['roadmap'])) : ?>
				<div class="contribute">
					<?php printf( __('Your contribution will help fund new features in %s.', 'atom'), ucfirst($theme) ); ?>
					<?php printf( __('Find out more on our <a href="%s" target="_blank">roadmap</a>.', 'atom'), $siteorigin_premium_info['roadmap'] ); ?>
				</div>
			<?php endif; ?>

			<?php if(!empty($siteorigin_premium_info['testimonials'])): ?>
				<h3 class="testimonials-heading"><?php _e('Our User Feedback', 'atom') ?></h3>
				<ul class="testimonials">
					<?php foreach($siteorigin_premium_info['testimonials'] as $testimonial) : ?>
						<li class="testimonial clearfix">
							<div class="avatar" style="background-image: url(http://www.gravatar.com/avatar/<?php echo esc_attr($testimonial['gravatar']) ?>?d=identicon&s=40)"></div>

							<div class="text">
								<div class="name"><?php echo $testimonial['name'] ?></div>
								<div class="content"><?php echo $testimonial['content'] ?></div>
							</div>
						</li>
					<?php endforeach; ?>
				</ul>
			<?php endif; ?>

		</div>

	<?php endif; ?>

	<div class="clear"></div>
</div>