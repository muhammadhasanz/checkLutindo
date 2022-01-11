<?php
defined('BASEPATH') or exit('No direct script access allowed');
// header("location: http://localhost/lutindo/admin/not_found/");
?>
<!DOCTYPE html>
<html>

<head>
	<!-- Required meta tags -->
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"><!-- End Required meta tags -->
	<!-- Begin SEO tag -->
	<title> 404 | Lutindo </title>
	<meta property="og:title" content="Sign In">
	<meta name="author" content="PTIKF2017">
	<meta property="og:locale" content="en_US">
	<meta name="description" content="Delivery">
	<meta property="og:description" content="Delivery">
	<link rel="canonical" href="index.html">
	<meta property="og:url" content="index.html">
	<meta property="og:site_name" content="PTIKF2017">
	<!-- Favicons -->
	<link rel="apple-touch-icon" sizes="144x144" href="assets/apple-touch-icon.png">
	<link rel="shortcut icon" href="assets/favicon.ico">
	<meta name="theme-color" content="#3063A0"><!-- Google font -->
	<link href="https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600" rel="stylesheet"><!-- End Google font -->
	<!-- BEGIN PLUGINS STYLES -->
	<link rel="stylesheet" href="../assets/vendor/fontawesome/css/all.css"><!-- END PLUGINS STYLES -->
	<!-- BEGIN THEME STYLES -->
	<link rel="stylesheet" href="../assets/stylesheets/theme.min.css" data-skin="default">
	<link rel="stylesheet" href="../assets/stylesheets/theme-dark.min.css" data-skin="dark">
	<link rel="stylesheet" href="../assets/stylesheets/custom.css">
	<script>
		var skin = localStorage.getItem('skin') || 'default';
		var isCompact = JSON.parse(localStorage.getItem('hasCompactMenu'));
		var disabledSkinStylesheet = document.querySelector('link[data-skin]:not([data-skin="' + skin + '"])');
		// Disable unused skin immediately
		disabledSkinStylesheet.setAttribute('rel', '');
		disabledSkinStylesheet.setAttribute('disabled', true);
		// add flag class to html immediately
		if (isCompact == true) document.querySelector('html').classList.add('preparing-compact-menu');
	</script><!-- END THEME STYLES -->
</head>

<body>
	<!--[if lt IE 10]>
    <div class="page-message" role="alert">You are using an <strong>outdated</strong> browser. Please <a class="alert-link" href="http://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</div>
    <![endif]-->
	<!-- .empty-state -->
	<main id="notfound-state" class="empty-state empty-state-fullpage bg-black">
		<!-- .empty-state-container -->
		<div class="empty-state-container">
			<div class="card">
				<div class="card-header bg-light text-left">
					<i class="fa fa-fw fa-circle text-red"></i> <i class="fa fa-fw fa-circle text-yellow"></i> <i class="fa fa-fw fa-circle text-teal"></i>
				</div>
				<div class="card-body">
					<div class="state-figure">
						<img class="img-fluid" src="../assets/images/illustration/img-2.svg" alt="" style="max-width: 320px">
					</div>
					<h3 class="state-header"> Halaman tidak ditemukan! </h3>
					<p class="state-description lead"> Maaf, kami salah menempatkan url atau halaman yang anda minta tidak ditemukan. </p>
					<div class="state-action">
						<a href="javascript:history.back()" class="btn btn-lg btn-light"><i class="fa fa-angle-right"></i> Kembali</a>
					</div>
				</div>
			</div>
		</div><!-- /.empty-state-container -->
	</main><!-- /.empty-state -->
	<!-- BEGIN BASE JS -->
	<script src="../assets/vendor/jquery/jquery.min.js"></script>
	<script src="../assets/vendor/bootstrap/js/popper.min.js"></script>
	<script src="../assets/vendor/bootstrap/js/bootstrap.min.js"></script> <!-- END BASE JS -->
	<!-- BEGIN PLUGINS JS -->
	<script src="../assets/vendor/particles.js/particles.min.js"></script>
	<script>
		/**
		 * Keep in mind that your scripts may not always be executed after the theme is completely ready,
		 * you might need to observe the `theme:load` event to make sure your scripts are executed after the theme is ready.
		 */
		$(document).on('theme:init', () => {
			/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
			particlesJS.load('notfound-state', 'assets/javascript/pages/particles-error.json');
		})
	</script> <!-- END PLUGINS JS -->
	<!-- BEGIN THEME JS -->
	<script src="../assets/javascript/theme.min.js"></script> <!-- END THEME JS -->
</body>

<!-- Mirrored from uselooper.com/auth-error-v3.html by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 29 Nov 2019 16:26:42 GMT -->

</html>