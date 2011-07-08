<?php

// we use these
$status = 'titseverywhere';

// Include the config and SDK
require_once 'config.php';
require_once 'vendor/aws-sdk/sdk.class.php';
require_once 'config.inc.php';
require_once 'db.php';

$download_code = get_download_code();
$downloads_left = 0;
$download_url = '';
$download_filename = '';

$code_pattern = '/^[A-Za-z0-9]{8}$/';
if (preg_match($code_pattern, $download_code)) {
	list ($downloads_left, $download_filename) = get_download_info($download_code);

	if ($downloads_left > 0) {
		if (decrement($download_code)) {
			$s3 = new AmazonS3();
			$download_url = $s3->get_object_url('allcaps', $download_filename, '+30 seconds');
			$status = "sweet";
		}
		else {
			$status = "decrement_failed";
		}
	}
	else {
		$status = "no_downloads";
	}
}
else {
	$status = "wrong_code";
}

function get_download_code() {
	$download_code = $_GET['code'];

	$download_code = mysql_real_escape_string($download_code);

	return $download_code;
}

function get_download_info($download_code) {
	$query = "SELECT * FROM sekrit_codes INNER JOIN files ON sekrit_codes.file_id=files.id WHERE sekrit_codes.code='" . $download_code . " ';";
	$sql = mysql_query($query);

	if (!$sql) {
		error_log("Query $query failed: " . mysql_error());
	}

	$row = mysql_fetch_array($sql);
	return array($row["downloads"], $row["filename"]);
}

function decrement($download_code) {
	$dec_query = "UPDATE sekrit_codes SET downloads = downloads - 1 WHERE code = '" . $download_code . "';";
	$dec_sql = mysql_query($dec_query);

	if (!$dec_sql) {
		error_log("Query $query failed: " . mysql_error());
		return false;
	}

	return true;
}
?><!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
"http://www.w3.org/TR/html4/strict.dtd">
<html lang="en">
<head>
 <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>FOUR LITRES OF HOPE BY BANKAI AND ABORTIFACIENT</title>
	<meta name="author" content="Squareweave">

	<link rel="stylesheet" href="<?php echo $rooturl; ?>design/vendor/resetstyle.sw/reset.css" type="text/css" media="screen" charset="utf-8">


	<script src="<?php echo $rooturl; ?>design/vendor/jquery/jquery-1.4.2.min.js" type="text/javascript" charset="utf-8"></script>
	<script src="<?php echo $rooturl; ?>design/scripts/toys.js" type="text/javascript" charset="utf-8"></script>

	<link rel="stylesheet" href="<?php echo $rooturl; ?>design/css/layout.css" type="text/css" media="screen" charset="utf-8">


	<!--[if IE ]>
	 <link rel="stylesheet"  href="<?php echo $rooturl; ?>design/css/ie/generalfailure.css" type="text/css" media="screen, projection">
	<![endif]-->

	<!--[if lte IE 6]>
	 <link rel="stylesheet"  href="<?php echo $rooturl; ?>design/css/ie/6failshard.css" type="text/css" media="screen, projection">
	<![endif]-->

	<!--[if IE 7]>
	 <link rel="stylesheet"  href="<?php echo $rooturl; ?>design/css/ie/7fails.css" type="text/css" media="screen, projection">
	<![endif]-->	

	<!--[if gt IE 7]>
	 <link rel="stylesheet"  href="<?php echo $rooturl; ?>design/css/ie/futurefailure.css" type="text/css" media="screen, projection">
	<![endif]-->

	
</head>
 
<body class="download">

<div class="fuckyeah">
	<img src="awesome/plane.gif" alt="freshprince">
</div>

<form class="blat" action="download" method="get">
	<div>

		<?php switch($status):
					case 'wrong_code':
					case 'decrement_failed': ?>
		
			<p class="download">You messed up yo. Try again. Email <a href="mailto:will@bankai.fm">will@bankai.fm</a> if you think we screwed up.</p>
		
		<?php break; case 'sweet': ?>
			<p class="download">
				You can download <a href="<?php echo $download_url ?>" class="floh"><?php echo $download_filename; ?></a> <strong><?php echo ($downloads_left-1); ?></strong> more times using this code. Don't fuck it up.
			</p>
			
		<?php break; case 'no_downloads': ?>
				
				<p class="download">The downloads on that code are all used up. Sorry dude. Hi five!</p>

	<?php break; endswitch ?>


	<input name="code" id="code" value="<?php echo $download_code; ?>" type="text" class="text">
	<input type="submit" class="submit" value="&nbsp;">
	<a target="_blank" href="#" class="wtf">HELP + FAQs<span>If you've scored a download code somewhere, you can enter it here to get the FUCKING SWEET DOWNLOAD PACK with all sorts of rad stuff in it. <strong>Click that link for more help &raquo;</strong></span></a>
	</div>
</form>


<div class="aboot">
	<p>Four litres of Hope is the new thing from <a class="dood" href="http://bankai.fm">Bankai</a> (<a href="http://soundcloud.com/bankaibash">soundcloud</a> / <a href="http://facebook.com/bankaibash">facebook</a>) and <a class="dood" href="http://soundcloud.com/abortifacient">Abortifiacient</a> (<a href="http://soundcloud.com/abortifacient">soundcloud</a> / <a href="http://facebook.com/abortifacient">facebook</a>)</p>
</div>

</body>
</html>
