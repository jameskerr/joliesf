var Jolie = {};

Jolie.fadeInImages = function() {
  var delay = 0;
  $('#instafeed img').each(function() {
    var image = $(this);
    setTimeout(function() { image.addClass('show'); }, delay);
    delay += 100;
  });
};

Jolie.feed = new Instafeed({
  get:         'user',
  userId:      '1580317725',
  clientId:    'a569b1ca71614bc69dc95820fe377699',
  accessToken: '6012257838.a569b1c.764b21bc678e49abb7e1fbff26f42614',
  resolution:  'standard_resolution',
  sortBy:      'random',
  after:       Jolie.fadeInImages
});

Jolie.feed.run();
