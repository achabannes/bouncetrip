<?php
if(isset($_POST["type"])) {
	$type=$_POST["type"];
}
else {
	$type="mapbox";
}
if($type=="googlemaps") {
	$title="Google Maps";
}
elseif ($type=="mapbox") {
	$title="MapBox";
}
?>
<!DOCTYPE html>
<html>
	<head>
    <title>Map Test</title>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
		<link type="text/css" href="style.css" rel="stylesheet">
		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
		<script type="text/javascript">
			$(function(){
				$("li").each(function(){
					if($(this).attr("id")=="<?php echo $type; ?>") {
						$(this).addClass("active"); 
						return false;
					}
				});
				$("li").click(function(){
					$("input[name='type']").val($(this).attr("id"));
					$("form[name='changeType']").submit();
				});
			});
		</script>
		<?php require_once("inc/".$type.".inc.php"); ?>
	</head>
	<body>
		<form name="changeType" method="post">
			<input type="hidden" name="type">
		</form>
		<ul>
			<li id="mapbox">MapBox</li>
			<li id="googlemaps">Google Maps</li>
		</ul>
		<div>
			<h1>Testing - <?php echo $title; ?> API</h1>
			<div id="map" class="dark"></div>
			<div class='update'>
				<?php
					$fileList = array("index.php","style.css","inc/".$type.".inc.php","js/".$type.".js");
					foreach($fileList as $file) {
						if (file_exists($file)) {
					    echo "<strong>$file</strong> | latest: " . date ("Y/n/d H:i:s", filemtime($file)) . "<br>";
						}
					}
				?>
			</div>
			<?php if ($type == "mapbox") { require_once("inc/form.inc.php"); } ?>
		</div>
		<script type="text/javascript" src="js/<?php echo $type; ?>.js"></script>
  </body>
</html>