// This script originally used the YQL Console as a service to convert the RSS response from XML to JSON so that it could be parsed.
// On August 24, 2017, though, this service ceased to become reliable. It was returning HTTP 400 errors. Luckily, a new API from the
// site rss2json is available so the script below was updated to point to that API. See https://rss2json.com/docs for documentation.

function getNewBooks(feedURL, container) {
	var getBooks =
		$.ajax({
	    	url: 'https://api.rss2json.com/v1/api.json',
	    	method: 'GET',
	    	dataType: 'json',
	    	data: {
	    		rss_url: feedURL,
	    		api_key: 'INSERT KEY HERE',
	    		count: 100
	    	}
	    }).done(function (response) {
	    	if(response.status != 'ok') { throw response.message; }

	    	console.log('====== ' + response.feed.title + ' ======');

	    	$.each(response.items, function (key, value) {
	    		$('.lSSlideOuter a').attr('target','_blank');
	      		var bookTitle = value.title; // Get the title of the book
	      		var shortTitle = $.trim(bookTitle).substring(0,75) + '...'; // Create a snippet from the title to display over default cover art image when no cover art is available.
	      		var cover =  value.guid.replace(/[-+()\abcdefghijklmnopqrstuvwxyz. ]/g, '');// Get the cover art image
	      		var catalogLink = value.link; // Get the catalog link
	     	$.ajax({
						  dataType: 'json',
						  url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + cover,
						  success: handleResponse
						});
						function handleResponse( response ) {
								if (response.totalItems>0){
								if (response.items[0].volumeInfo.imageLinks.thumbnail != null){
						    var thumb = response.items[0].volumeInfo.imageLinks.thumbnail;
								var thehtml = '<div class="coverArt"><a href="' + catalogLink + '"><img class="thumbnail" src="' + thumb + '" alt="" />' + bookTitle + '</a></div>'
						}
					}
					$(container).append(thehtml); // Move the HTML above into the #newbooks div
						}
	      	});
	    });

			setTimeout(function(){
				$(container).lightSlider({
					pager: false,
				});
			}, 250);

};
