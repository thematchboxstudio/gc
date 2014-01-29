<?php 
/*
Template Name: Home
*/
get_header(); ?>

			<div id="content">
			
				<div id="inner-content" class="clearfix">
			
				    <div id="main" class="twelvecol first clearfix" role="main">
				    	<?php if(get_field('section_1') ){
				    		while( has_sub_field('section_1') ) {
				    			$background_image = get_sub_field('background_image');?>
				    	<section class="page-section intro shadow" id="top" style="background-image:url(<?php echo $background_image; ?>);">>

				    		<div class="container wrap">
						    	<div class="main-logos">
						    		<div class="gc"><img src="<?php echo get_template_directory_uri(); ?>/library/images/gc-logo.png" alt="Graphic Converting"></div>
						    		<div class="and"><img src="<?php echo get_template_directory_uri(); ?>/library/images/ampersand.png" alt="And"></div>
						    		<div class="rb"><img src="<?php echo get_template_directory_uri(); ?>/library/images/rb-logo.png" alt = "Raymer Bookbindery"></div>
						    	</div>
						    	<a class="scroll-link" href="#services">
						    	<div class="button scroll-down">
						    		Scroll Down
						    		<div class="arrow-down"></div>
						    	</div>
						    	</a>
						    </div>
						    <img class="bg" src="<?php echo $background_image; ?>" alt="Intro">
						</section>
						<?php }} ?>


							<?php if(get_field('section_2_left') ){
								while( has_sub_field('section_2_left') ) {
									$title = get_sub_field('title_2l');
									$headline = get_sub_field('headline');
									$full_width_copy = get_sub_field('full_width_copy_2l');
									$background_image = get_sub_field('background_image_2l');
									$pdf= get_sub_field('pdf_2');?>
							<div class="services-equipment page-section">

							<div id="services" class="nav-target">Services</div>

							<div id="section-1" class="services page-section scrolleffect" style="background-image:url(<?php echo $background_image; ?>);">
								<img class="bg" src="<?php echo $background_image; ?>" alt = "<?php $title ?>">
								<a class="nav-highlight-target" name="section1"></a>
					    		<div class="section-title active recenter">
					    			<div class="headline"><?php echo $headline; ?></div>
					    			<div class="button-wrap">
					    				<a href="<?php echo home_url(); ?>/#services"><div class="button more-info last-button">Our <?php echo $title; ?></div></a>
					    			</div>

					    		</div>
					    		<div class="section-title mobile-title">
				    				<h2 class="section-header"><?php echo $title; ?></h2>
				    			</div>
							</div>

							<?php } ?>

					    	<div class="services-hover info-hover">
					    		<div class="close">
									<p>Close</p>
								</div>
								<div class="hover-title">
						    		<h4><?php echo $title; ?></h4>
						    	</div>

						    	<div class="full-width-copy"><?php echo $full_width_copy; ?></div>

						    	<div class="info-wrap">

									<div class="more-info-titles">

										<?php $counter = 1; ?>
										<?php if(get_field('section_2_left') ){
											while( has_sub_field('section_2_left') ) {
												while( has_sub_field('more_info_content') ) { ?>

													<div class="title-<?php echo $counter; ?> more-info-title">
														<?php $more_info_title = get_sub_field('more_info_title');?>
														<h5><?php echo $more_info_title; ?></h5>
														<?php $more_info_details = get_sub_field('more_info_details');?>
														<div class="mobile-more-info">
															<?php echo $more_info_details; ?>
														</div>
														<?php //<div class="more-info-arrow"></div> ?>
													</div>

													<?php $counter++; ?>
												<?php }
											} }?>

										<a href="<?php echo $pdf; ?>"><div class="pdf-button">Equipment Specs <span>Download</span></div></a>
									</div>

									<div class="more-info-details">

										<?php $counter = 1;
											if(get_field('section_2_left') ){
												while( has_sub_field('section_2_left') ) {
													while( has_sub_field('more_info_content') ) { ?>
													<?php $more_info_details = get_sub_field('more_info_details');?>
													<?php $text_columns = get_sub_field('text_columns');?>

													<div class="details-<?php echo $counter; ?> <?php echo $text_columns; ?> more-info-detail">
														<?php echo $more_info_details; ?>
													</div>

													<?php $counter++;
													}
											} ?>
									</div>

								</div>

					    	</div>

					    	<?php }} ?>

						</div>

						<?php if(get_field('section_3') ){
							while( has_sub_field('section_3') ) {
								$title = get_sub_field('title_3');
								$headline = get_sub_field('headline');
								$full_width_copy = get_sub_field('full_width_copy_3');  ?>

					    <section class="product-gallery clearfix">
						<div id="our-work" class="nav-target"><?php echo $title; ?></div>
						<a class="nav-highlight-target" name="section2"></a>
				    		<div class="section-title active recenter">
				    			<div class="headline"><?php echo $headline; ?></div>
				    			<div class="button-wrap">
				    				<a href="<?php echo home_url(); ?>/#our-work"><div class="button more-info">Product List</div></a>
				    				<a href="<?php echo home_url(); ?>/#our-work"><div class="button gallery-activate last-button">Gallery</div></a>
				    			</div>

				    		</div>

				    		<div class="section-title mobile-title">
				    			<h2 class="section-header"><?php echo $title; ?></h2>
				    		</div>

				    		<div class="button gallery-back">Back</div>



					    		<div class="gallery-rotator">

										<?php while( has_sub_field('gallery_images_3') ) {
											$background_image = get_sub_field('images_3');
											$image_title = get_sub_field('image_title');
											$description = get_sub_field('image_description');
											?>
							    				<div class="slide scrolleffect" style="background: url(<?php echo $background_image; ?>);">
							    					<img class="bg" src="<?php echo $background_image; ?>" alt ="<?php $title; ?>">
							    					<div class="slide-info-wrap active">
							    						<div class="slide-info">
															<h3><?php echo $image_title; ?>:</h3>
															<h6><?php echo $description; ?></h6>
							    						</div>
							    					</div>
							    				</div>

						    			<?php } } ?>

					    			<img src="<?php echo get_template_directory_uri(); ?>/library/images/dummy.gif" alt="dummy" class="dummy" width="1478">
					    			<div class="next gallery-next arrow-buttons"><a href="<?php echo home_url(); ?>/#our-work">Next</a></div>
					   				<div class="previous gallery-previous arrow-buttons"><a href="<?php echo home_url(); ?>/#our-work">Previous</a></div>
					   			</div>

				    		<div class="slideshow-nav">
				    		</div>
					   			<div class="product-gallery-more-info info-hover">
					   				<div class="close">
										<p>Close</p>
									</div>
										<div class="hover-title">
						    				<h4><?php echo $title; ?></h4>
						    		</div>

						    		<div class="full-width-copy"><?php echo $full_width_copy; ?></div>
						    		<div class="info-wrap">
								   		<div class="more-info-titles">

													<?php $counter = 1; ?>
													<?php if(get_field('section_3') ){
														while( has_sub_field('section_3') ) {
															while( has_sub_field('more_info_content') ) { ?>

																<div class="title-<?php echo $counter; ?> more-info-title">
																	<?php $more_info_title = get_sub_field('more_info_title');?>
																	<h5><?php echo $more_info_title; ?></h5>
																	<?php $more_info_details = get_sub_field('more_info_details');?>
																	<div class="mobile-more-info">
																		<?php echo $more_info_details; ?>
																	</div>
																	<?php //<div class="more-info-arrow"></div> ?>
																</div>

																<?php $counter++; ?>
															<?php }
														} }?>

												</div>

												<div class="more-info-details">

													<?php $counter = 1;
														if(get_field('section_3') ){
															while( has_sub_field('section_3') ) {
																while( has_sub_field('more_info_content') ) { ?>
																<?php $more_info_details = get_sub_field('more_info_details');?>

																<div class="details-<?php echo $counter; ?> more-info-detail">
																	<?php echo $more_info_details; ?>
																</div>

																<?php $counter++;
																}
														} ?>
												</div>
										</div>
					    	</div>
					    </section>

					    <?php }} ?>





					    <?php if(get_field('section_4') ){
							while( has_sub_field('section_4') ) {
								$title = get_sub_field('title_4');
								$headline = get_sub_field('headline');
								$full_width_copy = get_sub_field('full_width_copy_4');?>

					    <section class="facility page-section">
					    	<div id="facility" class="nav-target">About Us</div>
					    	<a class="nav-highlight-target" name="section3"></a>
					    	<div class="section-title active recenter">
					    		<div class="headline"><?php echo $headline; ?></div>
					    		<div class="button-wrap">
				    				<div class="button more-info"><a href="<?php echo home_url(); ?>/#facility">More <?php echo $title; ?></a></div>
				    				<div class="button gallery-activate last-button"><a href="<?php echo home_url(); ?>/#facility">Gallery</a></div>
				    			</div>
					    	</div>

					    	<div class="section-title mobile-title">
				    			<h2 class="section-header"><?php echo $title; ?></h2>
				    		</div>

				    		<div class="button gallery-back">Back</div>


				    		<div class="facility-rotator">

				    			<?php while( has_sub_field('gallery_images_4') ) {
									$background_image = get_sub_field('images_4');
									?>

				    			<div class="slide scrolleffect" style="background-image: url(<?php echo $background_image; ?>);">
				    				<img class="bg" src="<?php echo $background_image; ?>" alt="About Us">
				    			</div>

				    			<?php } ?>
				    			<img src="<?php echo get_template_directory_uri(); ?>/library/images/dummy.gif" alt="dummy" class="dummy" width="1478">
				    			<div class="facility-next next arrow-buttons"><a href="<?php echo home_url(); ?>/#facility">Next</a></div>
					   			<div class="facility-previous previous arrow-buttons"><a href="<?php echo home_url(); ?>/#facility">Previous</a></div>
					   		</div>
					    	<div class="slideshow-nav">

					   	</div>

					   	<div class="facility-more-info info-hover">
							<div class="close">
								<p>Close</p>
							</div>
							<div class="hover-title">
							    <h4><?php echo $title; ?></h4>
							</div>
							<div class="facility-info info two-thirds">

					    		<div class="hover-copy">
						    		<?php echo $full_width_copy; ?>
						    	</div>
					    		<div class="hover-list">
						    		<div class="hover-list-left">
				    				<?php //echo $left_column_copy; ?>
					    			</div>
					    			<div class="hover-list-right">
					    				<?php //echo $right_column_copy; ?>
					    			</div>
								</div>
							</div>
						</div>

					    </section>

					     <?php }} ?>

					    <?php if(get_field('section_5') ){
							while( has_sub_field('section_5') ) {
								$title = get_sub_field('title_5');
								$address_1 = get_sub_field('address_1');
								$address_2 = get_sub_field('address_2');
								$city = get_sub_field('city');
								$state = get_sub_field('state');
								$phone = get_sub_field('phone');
								$fax = get_sub_field('fax');
								$email = get_sub_field('email');  ?>

						<section class="contact page-section">
							<div id="contact" class="nav-target">Contact</div>


							<div class="section-title contact-title">
					    		<h2 class="section-header show"><?php echo $title; ?></h2>
					    	</div>
					    	<div class="contact-info">
								<?php if($address_1) { ?>
									<h3><?php echo $address_1; ?></h3>

								<?php } if($address_2) { ?>
									<h3><?php echo $address_2; ?></h3>

								<?php } if($city) { ?>
									<h3><?php echo $city; ?></h3>

								<?php } if($state) { ?>
									<h3><?php echo $state; ?></h3>

								<?php } if($phone) { ?>
									<h3>Phone: <?php echo $phone; ?></h3>

								<?php } if($fax) { ?>
									<h3>Fax: <?php echo $fax; ?></h3>

								<?php } if($email) { ?>
									<h3>Email: <?php echo $email; ?></h3>
								<?php } ?>
								<a class="nav-highlight-target" name="section4"></a>
					    	</div>

							<div class="googleMap" id='googleMap'></div>

						</section>

						<?php }} ?>

						<?php get_footer(); ?>
			
				    </div><?php // end #main ?>
				    
				</div> <?php //  end #inner-content ?>
    
			</div><?php //  end #content ?>



		</div> <?php // end #container ?>

		 <?php // all js scripts are loaded in library/bones.php ?>
		<?php wp_footer(); ?>
	</div>

	</body>

</html><?php //  end page. what a ride! ?>

