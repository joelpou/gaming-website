$('a[data-toggle="modal"]').on('click', function(){
    // update modal header with contents of button that invoked the modal
    //$('#myModalLabel').html('h3');

    $('#utility_body').load(
        $(this).attr('href'),
        function(response, status, xhr) {
            if (status === 'error') {
                $('#utility_body').html('<h2>Oh boy</h2><p>Sorry, but there was an error:' + xhr.status + ' ' + xhr.statusText+ '</p>');
            }
            return this;
        }
    );
});
