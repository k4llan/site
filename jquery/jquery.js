<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js">
</script>
<script type="text/javascript">
jQuery(document).ready(function($) {
$(".button").click(function(event){
event.preventDefault();
$('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
});
});
</script>