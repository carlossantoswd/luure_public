$( document ).ready(function()
{
	$('.table-browse').DataTable({
		"lengthMenu": [
		[10, 25, 50, -1],
		[10, 25, 50, "All"]
		]
	});
});