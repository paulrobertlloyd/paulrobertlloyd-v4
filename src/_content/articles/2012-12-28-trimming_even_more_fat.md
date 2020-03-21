---
title: Trimming Even More Fat
date: 2012-12-28T19:56:19Z
location:
  locality: Walsall
  country-name: United Kingdom
summary: The Christmas break provides the time to tie up loose ends and make much needed progress on personal projects. At least, that was the plan. Once again I find myself distracted by the task of making this website just that little bit faster.
category:
- Website
- Web
- Web performance
---
The Christmas break provides the time to tie up loose ends and make much needed progress on personal projects. At least, that was the plan. Once again I find myself distracted by the task of making this website just that little bit faster.

As a follow-up to [last month’s post][1], here are some additional performance enhancements I’ve made between eating the left over turkey.

## Fewer HTTP requests

In my last post I described how I was able to remove many of the JavaScript dependancies the site once relied upon. The only site-wide script remaining was that used to manipulate the main navigation, adding and hiding elements and class names that I could then style with CSS.

In my quest to reduce HTTP requests, and having seen [Aaron Gustafson’s JavaScript-free mobile navigation solution][2], the need for this small script became questionable.

I love the ingenuity of Aaron’s approach, not least because it builds upon a clean, semantic base, and feels like genuine progressive enhancement. That said, Opera Mini has trouble interpreting the `:target` pseudo-class selector this solution uses, so it’s not without its problems.

### Mashed up icons

A further request could be removed by using [data URIs][3] and encoding the SVG image sprite as a base64 string in the CSS. This became a less attractive option when I learnt that the size of this string would be larger than the linked file it would replace.

As I sought to reduce the size of the sprite, I realised many of the graphical elements it contained could be provided with simple CSS rules: the three line menu icon, the round containers for back and forward navigation links — even the Flickr icon in the footer could be generated using CSS. With these removed, the remaining icons appeared best suited to being served as a web font instead.

I now find myself using a combination of techniques. The logo continues to use SVG, but encoded as a base64 string. CSS styles are used to create simple shapes and icons, with a custom web font (created using the amazing [IcoMoon][4] app) used for more complex icons.

In order to keep the size of this file down, fallbacks (PNG for the logo, EOT and TrueType for the web font) continue to reference external files. This means users of older browsers may end up downloading both the fallback assets and the files encoded within the CSS. It’s not a perfect situation, but going by my analytics data, this won’t affect many visitors.

In addition to these changes, refactoring the remaining styles meant the new CSS file is slightly smaller than the three previous files it replaces:

<table>
  <caption>Bytes downloaded (requests)</caption>
  <tr>
    <th>Before&nbsp;(CSS+JS+SVG)</th>
    <td style="--chart-width: 100%;">11.47 kB (3)</td>
  </tr>
  <tr>
    <th>After&nbsp;(CSS only)</th>
    <td style="--chart-width: 93.80%;">10.76 kB (1)</td>
  </tr>
</table>

## Improved time to first byte

In my previous post, I mentioned that I was now serving the site via [CloudFlare][5]. Beyond providing content distribution and file optimisation, this service provides a layer of protection from security threats like SQL injection and denial of service attacks.

I really like CloudFlare, but it came with a notable downside: Time to First Byte times were longer than they ought to be. This issue has been [dismissed by CloudFlare][6], yet real world usage suggested the responsiveness of this site was indeed impacted. [Andy Hume][7] recommended I try [Fastly][8]. While it doesn’t optimise files or provide security protection, it provides the same core service as CloudFlare more effectively[^1]:

### First view

<table>
  <caption>CloudFlare</caption>
  <tr>
    <th>First&nbsp;byte</th>
    <td style="--chart-width:12.25%;">1,225 ms</td>
  </tr>
  <tr>
    <th>Document&nbsp;complete</th>
    <td style="--chart-width:67.22%;">6,722 ms</td>
  </tr>
  <tr>
    <th>Fully&nbsp;loaded</th>
    <td style="--chart-width:67.98%;">6,798 ms</td>
  </tr>
</table>

<table>
  <caption>Fastly</caption>
  <tr>
    <th>First&nbsp;byte</th>
    <td style="--chart-width:1.89%;">189 ms</td>
  </tr>
  <tr>
    <th>Document&nbsp;complete</th>
    <td style="--chart-width:29.88%;">2,988 ms</td>
  </tr>
  <tr>
    <th>Fully&nbsp;loaded</th>
    <td style="--chart-width:30.64%;">3,064 ms</td>
  </tr>
</table>

### Repeat view

<table>
  <caption>CloudFlare</caption>
  <tr>
    <th>First&nbsp;byte</th>
    <td style="--chart-width:11.88%;">1,188 ms</td>
  </tr>
  <tr>
    <th>Document&nbsp;complete</th>
    <td style="--chart-width:19.61%;">1,961 ms</td>
  </tr>
  <tr>
    <th>Fully&nbsp;loaded</th>
    <td style="--chart-width:34.45%;">3,445 ms</td>
  </tr>
</table>

<table>
  <caption>Fastly</caption>
  <tr>
    <th>First&nbsp;byte</th>
    <td style="--chart-width:3.87%;">387 ms</td>
  </tr>
  <tr>
    <th>Document&nbsp;complete</th>
    <td style="--chart-width:7.43%;">743 ms</td>
  </tr>
  <tr>
    <th>Fully&nbsp;loaded</thtd>
    <td style="--chart-width:7.43%;">743 ms</td>
  </tr>
</table>

By moving away from CloudFlare, the site now loads twice as fast. On repeated views the response is four times faster, although that figure is also helped by the optimisations I described earlier, and by the fact that I’m now caching my PHP files.

If a single lesson is to be taken from all this, it’s that often the biggest gains can come from the simplest changes. If you’re interested in improving the speed of your own website, start with the bigger pieces on your plate first.

I dare say further improvements could be made, and I wouldn’t be surprised if I’m writing a similar blog post again soon.

[^1]: WebPagetest results: [19 December (using CloudFlare)](http://webpagetest.org/result/121219_DH_DDQ/), [27 December (using Fastly)](http://webpagetest.org/result/121227_BD_GR8/)

[1]: /2012/11/trimming_the_fat
[2]: http://www.netmagazine.com/tutorials/build-smart-mobile-navigation-without-hacks
[3]: http://css-tricks.com/data-uris/
[4]: http://icomoon.io/#app-features
[5]: http://cloudflare.com/
[6]: http://blog.cloudflare.com/ttfb-time-to-first-byte-considered-meaningles
[7]: http://andyhume.net
[8]: http://www.fastly.com

*[CSS]: Cascading Style Sheets
*[EOT]: Embedded OpenType
*[HTTP]: HyperText Transfer Protocol
*[JS]: JavaScript
*[kB]: Kilobyte
*[PHP]: PHP: Hypertext Preprocessor
*[PNG]: Portable Network Graphic
*[ms]: milliseconds
*[SQL]: Search and Query Language
*[SVG]: Scalable Vector Graphics
*[URI]: Uniform Resouce Indicator
