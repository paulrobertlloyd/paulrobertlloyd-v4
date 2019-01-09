---
title: HTTPS + Compression Considered Harmful?
date: 2015-05-03T21:51:36+01:00
location:
  locality: Brighton
  country-name: United Kingdom
summary: I recently learnt about a security exploit that can occur when pages served over HTTPS use HTTP compression. Secure or fast, pick one?
tags:
- web
- web_performance
---
As I get closer to launching my redesigned website (this side of Christmas would be nice), I wanted to ensure pages were served over HTTPS. This reflects a broader community effort to make the web more secure and trustworthy, a move [encouraged by the W3C][1].

Enabling HTTPS wasn’t too difficult, largely thanks to [Josh’s excellent how-to guide][2]. He recommends getting a free certificate from [StartSSL][3], but as I have sub-domains for different staging and image resizing servers, I bought a [wildcard certificate from NameCheap][4] instead. The launch of [Let’s Encrypt][5] later this year should hopefully make this exercise easier and better yet, free.

## An unexpected consequence of enabling HTTPS

With my certificates installed and HTTPS enabled, I visited my site and smiled broadly as I saw a little lock icon next to my domain. Ah, such simple pleasures.

One reason for enabling HTTPS was to examine its impact on performance, so I submitted my newly secured site to [Google’s Page Insights][6] tool. Expecting a 100% score for speed as I had before, I instead got a value in the low 90% range. [Enabling compression][7] would reduce the response size of my static assets, I was told. But wait, I *had* enabled compression. Why was this setting not being respected?

I eventually realised this was a server related issue[^1], yet my original line of enquiry had me believe compression was disabled because using both SSL[^2] and HTTP compression could make a site vulnerable to the [BREACH][8] attack. This was the first time I had heard about such an exploit, which I find surprising given that it can occur when authors follow two sets of best practice. More precisely, a site is vulnerable to this attack when pages:

* Are served from a server that uses HTTP-level compression
* Reflect user-input in HTTP response bodies
* Reflect a secret (such as a CSRF token) in HTTP response bodies

Any discussion about encryption usually leaves me confused and befuddled (the shear number of abbreviations doesn’t help), but the BREACH team suggest a number of ways to [mitigate against an attack][9]. Ordered by effectiveness, it’s worth noting that their first suggestion is to simply disable HTTP compression. Given the impact this can have on performance, that’s quite concerning.

My new website serves only static resources (pages are generated using [Jekyll][10] on my local machine), does not submit any form data (my contact form uses [Formspree][11], a third-party service), and does not transmit any sensitive data. Therefore I believe it’s safe for me to continue using compression. However, if you have a website that posts sensitive data (perhaps you have a secure admin area), you may wish to investigate this issue further.

In the meantime, perhaps there needs to be a discussion about which approaches will help us build websites that are both secure *and* fast.

[^1]: I originally thought I wasn’t able to override this behaviour because requests to my custom-configured nginx instance are proxied via WebFaction’s [own front-end nginx process][12]. After considerable head scratching, I realised several conflicting nginx processes were running. Quitting these and starting a new single process fixed the issue.

[^2]: Compression has to be [enabled in nginx][13] regardless of protocol.

[1]: http://w3ctag.github.io/web-https/
[2]: https://www.joshemerson.co.uk/blog/secure-your-site
[3]: https://www.startssl.com/
[4]: https://www.namecheap.com/security/ssl-certificates/wildcard.aspx
[5]: https://letsencrypt.org
[6]: https://developers.google.com/speed/pagespeed/insights/
[7]: https://developers.google.com/speed/docs/insights/EnableCompression
[8]: https://en.wikipedia.org/wiki/BREACH_(security_exploit)
[9]: http://breachattack.com/#mitigations
[10]: http://jekyllrb.com
[11]: https://formspree.io
[12]: http://docs.webfaction.com/user-guide/websites.html#creating-a-website
[13]: http://nginx.com/resources/admin-guide/compression-and-decompression/

*[HTTP]: Hypertext Transfer Protocol
*[HTTPS]: HTTP Secure
*[W3C]: World Wide Web Consortium
*[BREACH]: Browser Reconnaissance and Exfiltration via Adaptive Compression of Hypertext
*[CSRF]: Cross-site request forgery
*[SSL]: Secure Sockets Layer
