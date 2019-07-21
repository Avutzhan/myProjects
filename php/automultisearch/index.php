<!DOCTYPE html>
<html>
<head>
	<title>Autocomplete multiselect jquery Example</title>
	
	<link rel="stylesheet" type="text/css" href="http://code.jquery.com/ui/1.10.4/themes/ui-lightness/jquery-ui.css"/>
	
	<link rel="stylesheet" type="text/css" href="style.css"/>
	
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script> 
	
	<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js"></script>
	
	<script src="autocomplete.multiselect.js"></script>
	
</head>
<body>

<div class="main-div">
	<h2>Autocomplete multiselect jquery Example</h2>
	<input id="myAutocompleteMultiple" type="text" />
</div>

<script type="text/javascript">
$(document).ready(function(){
    $(function() {
  function split( val ) {
                return val.split( /,\s*/ );
        }
                function extractLast( term ) {
                 return split( term ).pop();
        }

        $( "#myAutocompleteMultiple" )
            // don't navigate away from the field on tab when selecting an item
              .bind( "keydown", function( event ) {
                if ( event.keyCode === $.ui.keyCode.TAB &&
                        $( this ).data( "autocomplete" ).menu.active ) {
                    event.preventDefault();
                }
            })
            .autocomplete({
                source: function( request, response ) {
                    $.getJSON( "search.php",{  //Url of controller
                        term: extractLast( request.term )
                    },response );
                },
				multiselect: true,
                search: function() {
                    // custom minLength
                    var term = extractLast( this.value );
                    if ( term.length < 1 ) {
                        return false;
                    }
                },
                focus: function() {
                    // prevent value inserted on focus
                    return false;
                },
                select: function( event, ui ) {
                    var terms = split( this.value );
                    // remove the current input
                    terms.pop();
                    // add the selected item
                    terms.push( ui.item.value );
                    // add placeholder to get the comma-and-space at the end
                    terms.push( "" );
                    this.value = terms.join( "," );
                    return false;
                }
            });
          
 });
});
</script>
</body>
</html>