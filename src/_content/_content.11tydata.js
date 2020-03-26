module.exports = {
  eleventyComputed: {
    share_image: data => {
      const {image} = data;
      if (image) {
        return `https://res.cloudinary.com/paulrobertlloyd/image/fetch/c_fill%2Cf_auto%2Cq_auto%2Cw_1200%2Ch_630/${data.app.url}${image}`;
      }

      return `${data.app.url}${data.app.icon}`;
    },
    target: '{{ page.url | prepend: app.url | pretty }}'
  }
};
