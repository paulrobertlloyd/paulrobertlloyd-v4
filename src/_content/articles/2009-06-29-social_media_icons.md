---
title: Social Media Icons
date: 2009-06-29T00:18:09+01:00
summary: A set of standardised icons for popular social networking services and tools.
tags:
- projects
- social_media_icons
discussion: closed
---
I’ve often found myself requiring icons when linking to or referencing different social networks I’m a member of. Whilst there are a lot of icon sets available that can help me do this, most seem to be oversized and highly stylised. In the past I’ve used site favicons, but these can often be visually inconsistent.

With that in mind, and taking inspiration from the gorgeous icons used by [Tim van Damme][1] on his address card site, and the [Social Media Mini Iconpack][2] by Komodo media, I’ve created a selection of different icons each available in four different sizes (48×48, 32×32, 24×24 and 16×16).

For feedback and suggestions, please [submit an issue on GitHub][3].

[Download Social Media Icons][4]{download="socialmediaicons-1.11.0.zip"} — Version 1.11, 3.8Mb

*Licensed under a [Creative Commons Attribution-Share Alike 3.0 Licence][5]. I claim no right of ownership to the company logos used in these icons. Provision of these icons does not reflect endorsement of individual services.*

## Included icons

<style>
  .s-icons {
    display: flex;
    flex-wrap: wrap;
    font-size: 0.875rem;
  }
  .s-icons img {
    margin: 0.25rem 0.5rem 0.25rem 0;
  }
  .s-icons li {
    display: flex;
    align-items: center;
    flex-basis: 50%;
    white-space: nowrap;
    list-style: none;
  }
  @media screen and (min-width:37.5em) {
    .s-icons li {
      flex-basis: 33%;
    }
  }
</style>
{% capture icon %}<img src="https://raw.githubusercontent.com/paulrobertlloyd/socialmediaicons/master/ICON_NAME-48x48.png" height="24" width="24" alt="">{% endcapture %}
<ul class="s-icons">
  <li>{{ icon | replace: 'ICON_NAME','500px' }} 500px</li>
  <li>{{ icon | replace: 'ICON_NAME','aim' }} AIM</li>
  <li>{{ icon | replace: 'ICON_NAME','amazon' }} Amazon</li>
  <li>{{ icon | replace: 'ICON_NAME','adn' }} App.net</li>
  <li>{{ icon | replace: 'ICON_NAME','behance' }} Behance</li>
  <li>{{ icon | replace: 'ICON_NAME','bbcid' }} BBC iD</li>
  <li>{{ icon | replace: 'ICON_NAME','creativecommons' }} Creative Commons</li>
  <li>{{ icon | replace: 'ICON_NAME','delicious' }} Delicious</li>
  <li>{{ icon | replace: 'ICON_NAME','deviantart' }} Deviant Art</li>
  <li>{{ icon | replace: 'ICON_NAME','digg' }} Digg</li>
  <li>{{ icon | replace: 'ICON_NAME','dribbble' }} Dribbble</li>
  <li>{{ icon | replace: 'ICON_NAME','email' }} Email</li>
  <li>{{ icon | replace: 'ICON_NAME','etsy' }} Etsy</li>
  <li>{{ icon | replace: 'ICON_NAME','facebook' }} Facebook</li>
  <li>{{ icon | replace: 'ICON_NAME','feed' }} Feed</li>
  <li>{{ icon | replace: 'ICON_NAME','ffffound' }} Ffffound</li>
  <li>{{ icon | replace: 'ICON_NAME','flickr' }} Flickr</li>
  <li>{{ icon | replace: 'ICON_NAME','forrst' }} Forrst</li>
  <li>{{ icon | replace: 'ICON_NAME','foursquare' }} Foursquare</li>
  <li>{{ icon | replace: 'ICON_NAME','getsatisfaction' }} Get Satisfaction</li>
  <li>{{ icon | replace: 'ICON_NAME','geotag' }} Geotag</li>
  <li>{{ icon | replace: 'ICON_NAME','github' }} Github</li>
  <li>{{ icon | replace: 'ICON_NAME','goodreads' }} Goodreads</li>
  <li>{{ icon | replace: 'ICON_NAME','google' }} Google</li>
  <li>{{ icon | replace: 'ICON_NAME','google+' }} Google+</li>
  <li>{{ icon | replace: 'ICON_NAME','huffduffer' }} Huffduffer</li>
  <li>{{ icon | replace: 'ICON_NAME','identica' }} Identi.ca</li>
  <li>{{ icon | replace: 'ICON_NAME','imdb' }} IMDb</li>
  <li>{{ icon | replace: 'ICON_NAME','instagram' }} Instagram</li>
  <li>{{ icon | replace: 'ICON_NAME','lanyrd' }} Lanyrd</li>
  <li>{{ icon | replace: 'ICON_NAME','lastfm' }} Last.fm</li>
  <li>{{ icon | replace: 'ICON_NAME','linkedin' }} LinkedIn</li>
  <li>{{ icon | replace: 'ICON_NAME','meetup' }} Meetup</li>
  <li>{{ icon | replace: 'ICON_NAME','microsoft' }} Microsoft</li>
  <li>{{ icon | replace: 'ICON_NAME','myspace' }} MySpace</li>
  <li>{{ icon | replace: 'ICON_NAME','newsvine' }} Newsvine</li>
  <li>{{ icon | replace: 'ICON_NAME','nikeplus' }} Nike+</li>
  <li>{{ icon | replace: 'ICON_NAME','orkut' }} Orkut</li>
  <li>{{ icon | replace: 'ICON_NAME','pinboard' }} Pinboard</li>
  <li>{{ icon | replace: 'ICON_NAME','pinterest' }} Pinterest</li>
  <li>{{ icon | replace: 'ICON_NAME','rdio' }} Rdio</li>
  <li>{{ icon | replace: 'ICON_NAME','readability' }} Readability</li>
  <li>{{ icon | replace: 'ICON_NAME','readernaut' }} Readernaut</li>
  <li>{{ icon | replace: 'ICON_NAME','reddit' }} Reddit</li>
  <li>{{ icon | replace: 'ICON_NAME','share' }} Share</li>
  <li>{{ icon | replace: 'ICON_NAME','skype' }} Skype</li>
  <li>{{ icon | replace: 'ICON_NAME','slideshare' }} SlideShare</li>
  <li>{{ icon | replace: 'ICON_NAME','speakerdeck' }} Speaker Deck</li>
  <li>{{ icon | replace: 'ICON_NAME','soundcloud' }} Soundcloud</li>
  <li>{{ icon | replace: 'ICON_NAME','spotify' }} Spotify</li>
  <li>{{ icon | replace: 'ICON_NAME','stackoverflow' }} Stack Overflow</li>
  <li>{{ icon | replace: 'ICON_NAME','stumbleupon' }} StumbleUpon</li>
  <li>{{ icon | replace: 'ICON_NAME','thisismyjam' }} This Is My Jam</li>
  <li>{{ icon | replace: 'ICON_NAME','tumblr' }} Tumblr</li>
  <li>{{ icon | replace: 'ICON_NAME','twitter' }} Twitter</li>
  <li>{{ icon | replace: 'ICON_NAME','twitter-retweet' }} Twitter Retweet</li>
  <li>{{ icon | replace: 'ICON_NAME','vcard' }} vCard</li>
  <li>{{ icon | replace: 'ICON_NAME','vimeo' }} Vimeo</li>
  <li>{{ icon | replace: 'ICON_NAME','website' }} Website</li>
  <li>{{ icon | replace: 'ICON_NAME','wikipedia' }} Wikipedia</li>
  <li>{{ icon | replace: 'ICON_NAME','xbox' }} Xbox Live</li>
  <li>{{ icon | replace: 'ICON_NAME','xing' }} Xing</li>
  <li>{{ icon | replace: 'ICON_NAME','yahoo' }} Yahoo!</li>
  <li>{{ icon | replace: 'ICON_NAME','yelp' }} Yelp</li>
  <li>{{ icon | replace: 'ICON_NAME','youtube' }} YouTube</li>
  <li>{{ icon | replace: 'ICON_NAME','zerply' }} Zerply</li>
</ul>

[1]: http://timvandamme.com/
[2]: http://www.komodomedia.com/blog/2008/12/social-media-mini-iconpack/
[3]: https://github.com/paulrobertlloyd/socialmediaicons/issues
[4]: https://github.com/paulrobertlloyd/socialmediaicons/archive/1.11.0.zip
[5]: http://creativecommons.org/licenses/by-sa/3.0/

*[AIM]: AOL Instant Messnger
*[BBC]: British Broadcasting Corporation
*[IMDb]: Internet Movie Database
*[Mb]: Megabyte
*[OPML]: Outline Processor Markup Language
*[PNG]: Portable Network Graphic
