---
title: How I learned to stop worrying and love responsive images
article_id: a4Gb1
comments:
  - author:
      name: karl
      photo: https://gravatar.com/avatar/39814c0daf5f82f744e8c017c00429f9
      url: http://my.opera.com/karlcow
    published: 2012-02-27T18:34:52Z
    content: |-
      Note that what is at stake is deliver the most appropriate image for the current usage environment. So it’s not necessary a matter of size (width and height) but it can be a matter of weight. When on a small mobile device but connected through WiFi, I want to be able to have access to the big version of the image. The reason is that in coming scenarios of glanceable and/or shared screens, what is reaching my device is not necessary where it will be displayed/printed in the end. So media queries on network capabilities seem to be a better fit than screen size. Note that there is a Javascript API coming for network capabilities. I bet that this will evolve quickly, and there will be new devices contexts that we have not yet imagined.

      All of that said, there is a lonely specification at IETF about HTTP transparent negotiation. Basically it is a kind of media queries for the server. It gives information on what type of resources are available on the server, so the client could select the one which is appropriate for its context. I wrote about that. <http://my.opera.com/karlcow/blog/2011/12/08/responsive-images-and-transparent-content-negotiation-in-http>

      It is not necessary an immediate solution because it has the drawback that most front-end Web developers have no control or sometimes knowledge about the back-end, and content negotiation had a bad publicity in the past among browser implementers.
---
