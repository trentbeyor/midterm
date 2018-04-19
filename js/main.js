// // urn:ietf:wg:oauth:2.0:oob

// https://quotesondesign.com/api-v4-0/



// App ID: fd541a03332b6f4be7638288680958fa6af223116b083ab883f5bfdcd2fd5dd4

// Secret: 5c5ccc2297056de725b64f33de92d71445a90506063cfe258912f4836f4d99ce

// Callback URLs: urn:ietf:wg:oauth:2.0:oob

// d74a0d86ee8a07e3097f498e243bc11ee5ea6c185769e4125817c96a2916caad


// var url = "https://api.unsplash.com/photos?q=&client_id=fd541a03332b6f4be7638288680958fa6af223116b083ab883f5bfdcd2fd5dd4&client_secret=5c5ccc2297056de725b64f33de92d71445a90506063cfe258912f4836f4d99ce"


// $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", function(a) {
//   $('#button2').click(function()
// });



// https://random-quote-generator.herokuapp.com/api/quotes/random





// var keywords;

// $.getJSON(url,function(){

// }).done(function(){

// })

var btn=document.getElementById("button");

btn.onclick = function(){function makePhoto(){

	var photo = new UnsplashPhoto();

	return photo.all()
	     .fromCategory("nature")
	     .of(["trees", "water"])
	     .size(1000, 1200)
	     .fetch();
}

$('#imageblock').css('background-image','url(' + makePhoto() + ')');
};

