---
title: Trimming the Fat
date: 2012-11-01T01:15:00Z
location:
  locality: Brighton
  country-name: United Kingdom
summary: Website optimisation can be a cruel game; everything has a number that begs to be reduced, but doing so requires a lot of experimentation, research and testing. And when you’re playing with the last hundred or so kilobytes, there’s little reward for your effort.
category:
- web
- web_performance
discussion: closed
---
When I [unveiled][1] a new version of this site last year, I hoped the design would slowly evolve.

An update in February [improved the responsive layout][2] and saw some initial performance optimisations. The last few weeks have seen further iteration. Although the design looks remarkably similar, much has changed below the surface. Where each page previously requested at least 14 assets weighing a total of 385kB, now only 9 requests are needed, and with an unprimed cache, these total just over 100kB. I thought it would be interesting to detail the changes I’ve made, and this time, I’ve got graphs!

## JavaScript

Uncomfortable with having 30kB of jQuery as a dependancy, JavaScript was my first target for weight loss. In reviewing the jQuery functions I was using, I realised many were unnecessary:

* The [Awesomersands][3] function that allowed me to style ampersands was actually replacing the original glyph with a much uglier version. It also produced a distracting ‘flash of unstyled ampersand’.

* A function that added thin spaces around emdashes could instead be incorporated into my Movable Type templates. In making this change, I decided to now use spaced endashes instead.

* The HTML5 `history.pushState` function used on journal entry pages was fragile at best, so became a candidate for removal.

* A function that wrapped a `<div>` around video embeds to give them a fluid width was unnecessary when I could add this manually.

* Using [MapBox][4] embeds in place of [Leaflets JS][5] meant I could simplify adding interactive maps to pages. Well, almost. To display paths requires an additional layer to be created in [TileMill][6] — hopefully the ability to add vector lines in MapBox isn’t too far off.

With this code removed, the only behavioural enhancement required was for the responsive navigation. I’d like to thank [Anthony Williams][7] for helping me rewrite this using pure JavaScript. However, I’m still calling jQuery on pages displaying slideshows, so actively looking for an alternative that will allow me to shed this dependancy entirely.

<table>
  <caption>Javascript: Bytes downloaded (requests)</caption>
  <tr>
    <th>Before</th>
    <td style="--chart-width: 100%;">35.00 kB (2)</span></td>
  </tr>
  <tr>
    <th>After</th>
    <td style="--chart-width: 3.66%;">1.28 kB (1)</span></td>
  </tr>
</table>

## CSS

While helping out on a recent project at Clearleft, [Mark][8] introduced me to [LESS][9], a CSS pre-processor I became eager to use here. With [LESSphp][10] compiling LESS on the server, comments are stripped out and the generated CSS is easier to compress, too.

By removing unused style rules and refactoring others, my raw stylesheet shrunk by 19kB. Yet you’ll note that the compressed CSS file is still larger that it was before. That’s because the small background [noise texture][11] shown on larger viewports has been embedded as a base64 string, removing a further request.

<table>
  <caption>CSS: Bytes downloaded</caption>
  <tr>
    <th>Before</th>
    <td style="--chart-width: 91.46%;">8.25 kB</span></td>
  </tr>
  <tr>
    <th>After</th>
    <td style="--chart-width: 100%;">9.02 kB</span></td>
  </tr>
</table>

## SVG

In February [I began using an SVG image sprite][2], falling back to a PNG image for browsers that don’t support the vector format. To prevent both images loading, a subsequent update saw me move the following detection script into the `<head>`, before any CSS can be downloaded:

```html
<script>
  (function flagSVG() {
    var ns = {'svg': 'http://www.w3.org/2000/svg'};
    if(document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1")) {
      document.getElementsByTagName('html')[0].className += ' svg';
    }
  })();
</script>
```

If support for SVG is detected, an `svg` class is added to the `<html>` element. This allows me to create rules like this:

```css
.icon {
  background: url(/path/to/sprite.png) no-repeat 0 0;
}
.svg .icon {
  background-image: url(/path/to/sprite.svg);
}
```

### Going further

Besides stripping out the metacruft added by software like Illustrator, further optimisation can be found by using the `<defs>` and `<use>` elements. These allow you to define common objects, reducing the number of shape descriptions appearing in your document.

To demonstrate how this works, I’ll use three icons from my sprite image: a grey RSS feed icon (`#feed`), a Flickr icon (`#flickr`) and an orange and white feed icon (`#feeds`). In my original file, each was defined separately:

```xml
<svg xmlns="http://www.w3.org/2000/svg">
  <g id="feed">
    <path fill="#999" d="M 4.73 13.13 C 4.73 14.15 3.90 14.98 2.87 14.98 C 1.84 14.98 1 14.15 1 13.13 C 1 12.10 1.84 11.27 2.87 11.27 C 3.90 11.27 4.73 12.10 4.73 13.13 Z"/>
    <path fill="#999" d="M 1 8.44 C 2.75 8.44 4.39 9.12 5.63 10.36 C 6.87 11.59 7.55 13.24 7.55 15 L 10.24 15 C 10.24 9.90 6.10 5.76 1 5.76 L 1 8.44 Z"/>
    <path fill="#999" d="M 1.00 3.68 C 7.24 3.68 12.31 8.76 12.31 15 L 15 15 C 15 7.28 8.72 1 1 1 L 1 3.68 Z"/>
  </g>
  <g id="flickr">
    <path fill="#eee" d="M 0 32 L 24 32 L 24 56 L 0 56 L 0 32 Z"/>
    <path fill="#06d" d="M 5 44 C 5 42.34 6.34 41 8 41 C 9.66 41 11 42.34 11 44 C 11 45.66 9.66 47 8 47 C 6.34 47 5 45.66 5 44 Z"/>
    <path fill="#f08" d="M 13 44 C 13 42.34 14.34 41 16 41 C 17.66 41 19 42.34 19 44 C 19 45.66 17.66 47 16 47 C 14.34 47 13 45.66 13 44 Z"/>
  </g>
  <g id="feeds">
    <path fill="#f93" d="M 0 80 L 24 80 L 24 104 L 0 104 L 0 80 Z"/>
    <path fill="#fff" d="M 8.73 97.13 C 8.73 98.15 7.90 98.98 6.87 98.98 C 5.84 98.98 5 98.15 5 97.13 C 5 96.10 5.84 95.27 6.87 95.27 C 7.90 95.27 8.73 96.10 8.73 97.13 Z"/>
    <path fill="#fff" d="M 5 92.44 C 6.75 92.44 8.39 93.12 9.63 94.36 C 10.87 95.59 11.55 97.24 11.55 99 L 14.24 99 C 14.24 93.90 10.10 89.76 5 89.76 L 5 92.44 Z"/>
    <path fill="#fff" d="M 5 87.68 C 11.24 87.68 16.31 92.76 16.31 99 L 19 99 C 19 91.28 12.72 85 5 85 L 5 87.68 Z"/>
  </g>
</svg>
```

Note how the square shape, the feed icon and the circles used within the Flickr icon are described multiple times. The `<defs>` element means we can define these just once and reference them later with `<use>` and the `xlink:href` attribute, like so:

```xml
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <rect id="square" width="24" height="24"/>
    <path id="circle" d="M 0 3 C 0 1.34 1.34 0 3 0 C 4.66 0 6 1.34 6 3 C 6 4.66 4.66 6 3 6 C 1.34 6 0 4.66 0 3 Z"/>
    <path id="rss-icon" d="M 0 2.6797 C 6.24 2.6797 11.31 7.7598 11.31 14 L 14 14 C 14 6.2793 7.72 0 0 0 L 0 2.6797 ZM 0 7.4395 C 1.75 7.4395 3.39 8.12 4.6299 9.3594 C 5.87 10.5898 6.5498 12.24 6.5498 14 L 9.24 14 C 9.24 8.9 5.10 4.7598 0 4.7598 L 0 7.4395 ZM 3.73 12.1299 C 3.73 11.0996 2.8999 10.2695 1.87 10.2695 C 0.8398 10.2695 0 11.0996 0 12.1299 C 0 13.1504 0.8398 13.9805 1.87 13.9805 C 2.8999 13.9805 3.73 13.1504 3.73 12.1299 Z"/>
  </defs>
  <g id="feed">
    <use fill="#999" xlink:href="#rss-icon" x="1" y="1"/>
  </g>
  <g id="flickr">
    <use fill="#eee" xlink:href="#square" x="0" y="32"/>
    <use fill="#06d" xlink:href="#circle" x="5" y="41"/>
    <use fill="#f08" xlink:href="#circle" x="13" y="41"/>
  </g>
  <g id="feeds">
    <use fill="#f93" xlink:href="#square" x="0" y="80"/>
    <use fill="#fff" xlink:href="#rss-icon" x="5" y="85"/>
  </g>
</svg>
```

It’s easy to assume that gzip will take care of reducing file sizes, but manual optimisation beforehand can result in even larger reductions. For example, I was able to reduce my original SVG sprite (9.48kB, 3.36kB gzipped) to 7.34kB, which compressed down to just 2.84kB — comparable in size to the PNG sprite. 500 bytes seems like a small reduction, but using this technique on larger SVG images will have an even greater impact.

<table>
  <caption>Image sprite: Bytes downloaded</caption>
  <tr>
    <th>PNG</th>
    <td style="--chart-width: 79.41%;">3.42 kB</span></td>
  </tr>
  <tr>
    <th>SVG&nbsp;before</th>
    <td style="--chart-width: 100%;">4.31 kB</span></td>
  </tr>
  <tr>
    <th>SVG&nbsp;after</th>
    <td style="--chart-width: 87.23%;">3.80 kB</span></td>
  </tr>
</table>

## Fonts

Earlier this year I cut the number of webfonts I was using from four to three by using a single font family. This reduced page download sizes a little, but changing my web font provider to [Adobe Edge Web Fonts][12] produced a far greater saving, although at the cost of being able to use [Akagi][13] (I’m now using [Source Sans Pro][14]). Such was the reduction, I decided to include a forth font again, choosing the monospaced [Source Code Pro][15] which is useful on code heavy pages such as this[^1].

A free service without limitations or account management, Adobe’s new service is [stupidly easy to set up][16]. A single line of JavaScript provides a neat URL interface to various settings, and as the script includes WebFont Loader, there’s no need to add a chunk of JavaScript to the top of each page. Load times are brilliantly fast, and with fonts combined into a single file, the number of requests is the same regardless of how many you decide to use.

Of course, there is a trade-off here. Services like Fontdeck provide an extensive library of premium webfonts while free services like Adobe’s only offer a small selection of open source fonts. Yet with simpler set-up and greater performance, they’re an attractive option.

<table>
  <caption>Webfonts: Bytes downloaded (requests)</caption>
  <tr>
    <th>Before</th>
    <td style="--chart-width: 100%;">325.9 kB (6)</span></td>
  </tr>
  <tr>
    <th>After</th>
    <td style="--chart-width: 25.22%;">82.2 kB (3)</span></td>
  </tr>
</table>

## Other optimisations

I’m now serving content via [CloudFlare][17], a smart service that optimises content and intercepts dubious requests. With this is place, I no longer need [PHPminify][18] for CSS and JavaScript magnification. It also acts as a CDN, so static content has been moved from Amazon S3 (which I discovered isn’t *actually* a CDN) back to this domain where it’s easier to manage.

Calling a single PHP include from each page allows me to [specify the character set in the HTTP header][19]. Adding the `async` attribute to my analytics script means this will now download and execute without blocking other assets.

There have been a few design related tweaks too. I simplified the IA by moving links to my articles and academic essays to within the Portfolio section. I’ve also increased the base font size on content pages from 16px to 18px.

***

In February, I concluded the results of my performance optimisation by including results from Google Page Speed, YSlow and webpagetest.org. This means I can measure the effectiveness of these latest changes. Both Google Page Speed and YSlow scores have increased by two points, to 96 and 98 respectively. Comparing results saved from webpagetest.org, the following improvements to the homepage can be recorded[^2]:

<table>
  <caption>Requests</caption>
  <tr>
    <th>Before</th>
    <td style="--chart-width: 100%;">23</span></td>
  </tr>
  <tr>
    <th>After</th>
    <td style="--chart-width: 65.22%;">15</span></td>
  </tr>
</table>

<table>
  <caption>Bytes downloaded</caption>
  <tr>
    <th>Before</th>
    <td style="--chart-width: 100%;">500 kB</span></td>
  </tr>
  <tr>
    <th>After</th>
    <td style="--chart-width: 33.8%;">169 kB</span></td>
  </tr>
</table>

<table>
  <caption>Time to fully load document</caption>
  <tr>
    <th>Before</th>
    <td style="--chart-width: 100%;">4.684 seconds</span></td>
  </tr>
  <tr>
    <th>After</th>
    <td style="--chart-width: 73.68%;">3.304 seconds</span></td>
  </tr>
</table>

## If I had more time, I would make the website quicker

Arguably, many of these optimisations are overkill, especially given some of the modest reductions. Still, this exercise was useful in understanding where performance gains can be found, and I can apply this knowledge on future projects.

Website optimisation can be a cruel game; everything has a number that begs to be reduced, but doing so requires a lot of experimentation, research and testing. And when you’re playing with the last hundred or so kilobytes, there’s little reward for your effort. Hopefully this overview will save you from playing the same game.

[^1]: Fonts served previously (via Fontdeck): Akagi Book, SemiBold; Magenta Book, Book Italic. Fonts served now (via Adobe Edge Web Fonts): Source Sans Pro Light, Regular, Italic; Source Code Pro Regular.
[^2]: WebPagetest results for homepage comparison: [22 February (before)](http://webpagetest.org/result/120222_QC_3B11V/1/details/), [30 October (after)](http://webpagetest.org/result/121030_06_GZC/1/details/)

[1]: /2011/07/new_and_improved
[2]: /2012/02/niptuck
[3]: http://patrickhaney.com/thinktank/2008/08/19/automatic-awesompersands
[4]: https://www.mapbox.com
[5]: https://leafletjs.com
[6]: https://www.mapbox.com/tilemill/
[7]: http://abitgone.co.uk/
[8]: http://allmarkedup.com/
[9]: http://lesscss.org
[10]: https://leafo.net/lessphp/
[11]: http://noisetexturegenerator.com/
[12]: http://html.adobe.com/edge/webfonts/
[13]: http://fontdeck.com/typeface/akagi/
[14]: http://blogs.adobe.com/typblography/2012/08/source-sans-pro.html
[15]: http://blogs.adobe.com/typblography/2012/09/source-code-pro.html
[16]: https://edgewebfonts.adobe.com
[17]: https://www.cloudflare.com/en-gb/
[18]: https://github.com/mrclay/minify
[19]: https://developers.google.com/speed/docs/best-practices/rendering#SpecifyCharsetEarly

*[CDN]: content delivery network
*[CSS]: Cascading Style Sheets
*[HTML]: HyperText Markup Language
*[HTTP]: HyperText Transfer Protocol
*[IA]: information architecture
*[JS]: JavaScript
*[kB]: Kilobyte
*[PHP]: PHP: Hypertext Preprocessor
*[PNG]: Portable Network Graphic
*[RSS]: Really Simple Syndication
*[SVG]: Scalable Vector Graphics
*[URL]: Uniform Resouce Locator
*[WOFF]: Web Open Font Format
