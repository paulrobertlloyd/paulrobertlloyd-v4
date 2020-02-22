const slugify = require('@sindresorhus/slugify');

module.exports = function () {
  const skills = [{
    title: 'Brand Identity',
    summary: 'Always with one eye on creating a holistic experience, I relish the opportunity to help new companies develop their identity, be that by creating a recognisable mark or by developing a broader branding system.'
  }, {
    title: 'Front-end Development',
    summary: 'An advocate of developing services that are fast and accessible to all, I employ pragmatic front-end architectures that progressively enhance semantic HTML with maintainable CSS and unobtrusive JavaScript.'
  }, {
    title: 'Interaction Design',
    summary: 'In looking to create engaging, cohesive and usable experiences, I can take the development of a product from initial conception through to prototyping, usability testing and design implementation.'
  }];

  return skills.map(skill => {
    const fileSlug = slugify(skill.title, {
      separator: '_'
    });

    return {
      date: new Date(),
      fileSlug,
      url: `/projects/skills/${fileSlug}`,
      data: {
        layout: 'skill',
        title: skill.title,
        summary: skill.summary
      }
    };
  });
};
