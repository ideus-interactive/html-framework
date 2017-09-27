<?php
  if (empty($_SERVER['HTTPS']) || $_SERVER['HTTPS'] === 'off') {
      $protocol = 'http://';
  } else {
      $protocol = 'https://';
  }
  $BASE_URL = $protocol . $_SERVER['SERVER_NAME'] . dirname($_SERVER['PHP_SELF']);

  $isHomepage = (basename($_SERVER['PHP_SELF']) == 'index.php');
  $title = ($isHomepage) ? $siteName : $pageName.' : '.$siteName;
?>
<!doctype html>
<html class="l-html no-js" lang="">
<head>
  <meta charset="utf-8" />
  <meta http-equiv="x-ua-compatible" content="ie=edge">

  <title><?php echo $title; ?></title>
  <meta name="description" content="" />

  <!-- <meta property="og:image" content="<?php echo $BASE_URL; ?>/img/userfiles/og-image.png" /> -->

  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <style>
    @-ms-viewport {
      width: device-width;
    }
    @viewport {
      width: device-width;
    }
  </style>

  <link rel="shortcut icon" href="favicon.ico" />
  <link rel="apple-touch-icon" href="apple-touch-icon.png" />
  <!--<meta name="theme-color" content="#ed1c24" />-->

  <link rel="stylesheet" href="assets/css/main.min.css?<?php echo filemtime('assets/css/main.min.css'); ?>" />

  <script src="//cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>
  <script>window.Modernizr || document.write('<script src="assets/js/vendor/modernizr-2.8.3.min.js"><\/script>')</script>

  <script src="//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script>window.jQuery || document.write('<script src="assets/js/vendor/jquery-3.2.1.min.js"><\/script>')</script>
</head>
<body class="l-body -page_<?php echo $uri; ?><?php echo (!$isHomepage) ? ' -page_inner' : ''; ?>">
  <!--[if lt IE 8]>
    <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
  <![endif]-->

  <div class="l-wrapper">
    <header class="l-siteHeader">
      <div class="b-siteHeader">
        <div class="l-siteLogo">
          <?php
            $siteLogo__iconURL = 'assets/img/blocks/siteLogo/siteLogo-logo.png';
            $siteLogo__tag  = ($isHomepage) ? 'h1' : 'div';
            $siteLogo__link = ($isHomepage) ? '' : ' href="index.html"';
          ?>
          <<?php echo $siteLogo__tag; ?> class="b-siteLogo" itemscope itemtype="http://schema.org/Organization">
            <a class="b-siteLogo__link"<?php echo $siteLogo__link; ?> itemprop="url">
              <img class="b-siteLogo__icon" src="<?php echo $siteLogo__iconURL; ?>" alt="<?php echo $siteName; ?>" title="<?php echo $siteName; ?>" itemprop="logo" />
            </a>
          </<?php echo $siteLogo__tag; ?>>
        </div>

        <div class="l-siteSearch">
          <form class="b-siteSearch" role="search" method="post" action="#">
            <label class="b-siteSearch__label g-visuallyhidden" for="search-text">Search:</label>
            <input class="b-siteSearch__input" type="search" spellcheck="true" value="" name="search" id="search-text" />
            <input class="b-siteSearch__button" type="submit" value="Search" />
          </form>
        </div>

        <nav class="l-siteNavigation">
          <ul class="b-mainNavigation">
            <li class="b-mainNavigation__item<?php echo ($uri=='home')?' -state_current':''; ?>">
              <a class="b-mainNavigation__link" href="index.html">Home</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <div class="l-content">
