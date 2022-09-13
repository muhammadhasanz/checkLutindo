<!DOCTYPE html>
<html lang="en">

<!-- Mirrored from uselooper.com/component-steps.html by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 29 Nov 2019 16:29:14 GMT -->

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"><!-- End Required meta tags -->
    <!-- Begin SEO tag -->
    <title> Check | PT. Lutungan Indoutama </title>
    <meta property="og:title" content="Steps">
    <meta name="author" content="Muhammad Hasan Z">
    <meta property="og:locale" content="en_US">
    <meta name="description" content="Responsive admin theme build on top of Bootstrap 4">
    <meta property="og:description" content="Responsive admin theme build on top of Bootstrap 4">
    <link rel="canonical" href="index.html">
    <meta property="og:url" content="index.html">
    <meta property="og:site_name" content="Looper - Bootstrap 4 Admin Theme">
    <!-- FAVICONS -->
    <link rel="apple-touch-icon" sizes="144x144" href="<?= base_url() ?>assets/img/lutindo.png">
    <link rel="shortcut icon" href="<?= base_url() ?>assets/img/lutindo.png">
    <meta name="theme-color" content="#3063A0"><!-- End FAVICONS -->
    <!-- GOOGLE FONT -->
    <link href="https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600" rel="stylesheet"><!-- End GOOGLE FONT -->
    <!-- BEGIN PLUGINS STYLES -->
    <link rel="stylesheet" href="<?= base_url() ?>assets/vendor/open-iconic/css/open-iconic-bootstrap.min.css">
    <link rel="stylesheet" href="<?= base_url() ?>assets/vendor/fontawesome/css/all.css"><!-- END PLUGINS STYLES -->
    <!-- BEGIN THEME STYLES -->
    <link rel="stylesheet" href="<?= base_url() ?>assets/stylesheets/theme.min.css" data-skin="default">
    <link rel="stylesheet" href="<?= base_url() ?>assets/stylesheets/theme-dark.min.css" data-skin="dark">
    <link rel="stylesheet" href="<?= base_url() ?>assets/stylesheets/custom.css">
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
    <main class="app app-site">
        <nav class="navbar navbar-expand-lg navbar-light py-4" data-aos="fade-in">
            <!-- .container -->
            <div class="container">
                <!-- .hamburger -->
                <button class="hamburger hamburger-squeeze hamburger-light d-flex d-lg-none" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation"><span class="hamburger-box"><span class="hamburger-inner"></span></span></button> <!-- /.hamburger -->
                <!-- .navbar-brand -->
                <a class="navbar-brand ml-auto mr-0" href="<?= base_url() ?>">
                    <h3> Lutindo </h3>
                </a>
                <div class="navbar-collapse collapse" id="navbarTogglerDemo01">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item mr-lg-3 active">
                            <a class="nav-link py-2" href="<?= base_url() ?>">Check</a>
                        </li>
                        <li class="nav-item mr-lg-3">
                            <a class="nav-link py-2" target="_blank" href="https://www.lutindo.ga/">Portfolio</a>
                        </li>
                        <li class="nav-item mr-lg-3">
                            <a class="nav-link py-2" target="_blank" href="https://service.lutindo.ga/">Service</a>
                        </li>
                    </ul>
                </div><!-- /.navbar-collapse -->
            </div><!-- /.container -->
        </nav><!-- /.navbar -->
        <!-- /site header -->
        <!-- hero -->
        <section class="py-5 mb-4">
            <!-- .container -->
            <div class="container container-fluid-xl">
                <!-- .row -->
                <div class="row">
                    <!-- .col-md-6 -->
                    <!-- <div class="col-12 col-md-6 order-md-2" data-aos="fade-left">
                        <img class="img-fluid img-float-md-6 mb-5 mb-md-0" src="assets/images/illustration/launch.svg" alt="">
                    </div> -->
                    <!-- .col-md-6 -->
                    <div class="col-12 col-md-6 order-md-1" data-aos="fade-in">
                        <div class="col-fix pl-xl-3 ml-auto text-center text-sm-left">
                            <div class="card">
                                <!-- .card-body -->
                                <div class="card-body">
                                    <!-- .progress-list -->
                                    <form id="check-site" class="w-75 mx-auto mt-3">
                                        <div class="form-group">
                                            <div class="input-group bg-white border-white input-group">
                                                <input type="text" name="site_id" class="form-control text-black" placeholder="Masukkan Site ID" value="<?= $this->session->userdata('site_id') ?>" autofocus required autocomplete="off">
                                                <div class="input-group-append">
                                                    <button type="submit" class="btn btn-warning "><i class="fas fa-search"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div><!-- /.card -->
                        </div>
                    </div><!-- /.col-md-6 -->
                    <div class="col-12 col-md-6 order-md-1 d-none" id="history" data-aos="fade-in">
                        <div class="col-fix pl-xl-3 mr-auto text-center">
                            <div class="card">
                                <!-- .card-body -->
                                <div class="card-body">
                                    <span id="empty-history" class="d-none">Tidak ada data.</span>
                                    <ul id="timeline-history" class="timeline timeline-dashed-line mt-2 pr-0 text-left d-none">

                                    </ul>
                                </div>
                            </div><!-- /.card -->
                        </div>
                    </div><!-- /.col-md-6 -->
                </div><!-- /.row -->
            </div><!-- /.container -->
        </section><!-- /hero -->
        <section class="py-5 position-relative bg-light">
            <!-- .sticker -->
            <div class="sticker">
                <div class="sticker-item sticker-bottom-left w-100">
                    <!-- wave1.svg -->
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="120" viewbox="0 0 1440 240" preserveaspectratio="none">
                        <path class="fill-black" fill-rule="evenodd" d="M1070.39 25.041c107.898 11.22 244.461 20.779 369.477 51.164L1440 240H0L.133 72.135C350.236-17.816 721.61-11.228 1070.391 25.04z"></path>
                    </svg>
                </div>
            </div><!-- /.sticker -->
        </section><!-- /call to action -->
        <section class="py-2 bg-black text-white">
            <!-- .container -->
            <div class="container">
                <!-- .row -->
                <div class="text-center">
                    <img style="width: 150px;" src="<?= base_url(); ?>assets/img/logo.png" alt="">
                    <p class="text-muted mb-2 mt-3"> Laman Pengecekan Site. </p>
                    <address class="text-muted">
                        +62 812-4166-0005 </address><!-- Social -->
                </div><!-- /.row -->
                <p class="text-muted text-center mt-5"> © Copyright <strong>Team Lutindo</strong>. <?= date('Y', time()) ?>, Inc. All rights reserved. </p>
            </div><!-- /.container -->
        </section><!-- /footer -->
    </main><!-- /.app -->
    <!-- BEGIN BASE JS -->
    <script src="<?= base_url() ?>assets/vendor/jquery/jquery.min.js"></script>
    <script src="<?= base_url() ?>assets/vendor/bootstrap/js/popper.min.js"></script>
    <script src="<?= base_url() ?>assets/vendor/bootstrap/js/bootstrap.min.js"></script>
    <script src="<?= base_url() ?>assets/vendor/stacked-menu/stacked-menu.min.js"></script>
    <script src="<?= base_url() ?>assets/vendor/perfect-scrollbar/perfect-scrollbar.min.js"></script>
    <script src="<?= base_url() ?>assets/vendor/parsleyjs/parsley.min.js"></script>
    <script src="<?= base_url() ?>assets/vendor/text-mask/vanillaTextMask.js"></script>
    <script src="<?= base_url() ?>assets/vendor/text-mask/addons/textMaskAddons.js"></script>
    <!-- BEGIN THEME JS -->
    <script src="<?= base_url() ?>assets/javascript/theme.min.js"></script> <!-- END THEME JS -->
    <!-- BEGIN PAGE LEVEL JS -->
    <script src="<?= base_url() ?>assets/javascript/check.js"></script> <!-- END PAGE LEVEL JS -->
</body>

</html>