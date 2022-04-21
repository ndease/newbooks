# newbooks
A horizontal content slider that reads a Sierra RSS feed and returns book covers that link to their records in the library catalog. The slider itself is based on the [Accessible Slick](https://accessible360.github.io/) project and [bldaigle's newbooks](https://github.com/bldaigle/newbooks). It uses the Google Books api for book covers

This script will create a horizontal content slider of book covers, based on a Sierra RSS feed. 

This slider works off of Sierra's RSS feeds. A couple things about Sierra's feeds:

1. Feeds are based on a saved query so if you can create a list in Sierra, you can create a feed.
2. Everyone can create a saved query, but not everyone can create a feed. Just contact Ben Daigle at bldaigle@owu.edu if you'd like to create a new feed.
3. Not everything in a feed has cover art. Our covers come from Syndetics Solutions. The application passes an ISBN to Syndetics to see if there is art available. If there's no ISBN, there's no art.
