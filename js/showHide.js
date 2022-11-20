<!--
function blocking(nr)
{
	if (document.layers)
	{
		current = (document.layers[nr].display == 'block') ? 'none' : 'block';
		document.layers[nr].display = current;
	}
	
	else if (document.getElementById)
	{
		vista = (document.getElementById(nr).style.display == 'block') ? 'none' : 'block';
		document.getElementById(nr).style.display = vista;
	}
}