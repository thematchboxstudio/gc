<!doctype html>

<!--[if lt IE 7]><html <?php language_attributes(); ?> class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if (IE 7)&!(IEMobile)]><html <?php language_attributes(); ?> class="no-js lt-ie9 lt-ie8"><![endif]-->
<!--[if (IE 8)&!(IEMobile)]><html <?php language_attributes(); ?> class="no-js lt-ie9"><![endif]-->
<!--[if gt IE 8]><!--> <html <?php language_attributes(); ?> class="no-js"><!--<![endif]-->

	<head>
		<meta charset="utf-8">

		<title><?php bloginfo('name');?></title>

		<!-- Google Chrome Frame for IE -->
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

		<!-- mobile meta (hooray!) -->
		<meta name="HandheldFriendly" content="True">
		<meta name="MobileOptimized" content="320">
		<meta name="viewport" content="width=device-width, initial-scale=1.0"/>

		<!-- icons & favicons (for more: http://www.jonathantneal.com/blog/understand-the-favicon/) -->
		<link rel="apple-touch-icon" href="<?php echo get_template_directory_uri(); ?>/library/images/apple-icon-touch.png">
		<link rel="icon" href="<?php echo get_template_directory_uri(); ?>/favicon.png">
		<!--[if IE]>
			<link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/favicon.ico">
		<![endif]-->
		<!-- or, set /favicon.ico for IE10 win -->
		<meta name="msapplication-TileColor" content="#f01d4f">
		<meta name="msapplication-TileImage" content="<?php echo get_template_directory_uri(); ?>/library/images/win8-tile-icon.png">
		<script type="text/javascript"> if (!window.console) console = {log: function() {}}; </script>
		<script type="text/javascript"
      		src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBWZY68irNM0DQ79agDMyxNp4d3aeFq5ug&sensor=false">
    	</script>
    	<script type="text/javascript" src="//use.typekit.net/qwn2yyt.js"></script>
		<script type="text/javascript">try{Typekit.load();}catch(e){}</script>
		<script type="text/javascript">
            document.createElement('header');
            document.createElement('nav');
            document.createElement('menu');
            document.createElement('section');
            document.createElement('article');
            document.createElement('aside');
            document.createElement('footer');
            document.createElement('button');
        </script>

  	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">

		<!-- wordpress head functions -->
		<?php wp_head(); ?>
		<!-- end of wordpress head -->

		<!-- drop Google Analytics Here -->
		<!-- end analytics -->

	</head>

	<body <?php body_class(); ?>>

		<div id="container" class="tk-proxima-nova">

			<header class="header twelvecol first clearfix shadow" role="banner">

				<div id="inner-header" class="wrap">

					<nav role="navigation" class="drawer st-menu st-effect-1 navigation" id="menu-1">
						<?php bones_main_nav(); ?>

					</nav>


					<div class="menu-button"><a href="<?php echo home_url(); ?>/#intro-copy"><div class="menu-button-type">Menu</div></a></div>



					<div class="header-logos-desktop ">
						<a href="#top"><div class="header-logos"></div></a>
					</div>

					<!-- to use a image just replace the bloginfo('name') with your img src and remove the surrounding <p>
					<p id="logo" class="h1"><a href="<?php echo home_url(); ?>" rel="nofollow"><?php bloginfo('name'); ?></a></p> -->

					<!-- if you'd like to use the site description you can un-comment it below -->
					<?php // bloginfo('description'); ?>

				</div> <!-- end #inner-header -->

			</header> <!-- end header -->
			<div class="container-wrap">
