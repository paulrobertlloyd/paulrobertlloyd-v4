// eslint-disable-next-line unicorn/no-anonymous-default-export
export default () => {
  // Other archives
  const otherArchives = [
    {
      url: "/categories",
      data: {
        title: "Categories",
        summary: "Content across the site grouped by common topics.",
      },
    },
    {
      url: "/collections",
      data: {
        title: "Collections",
        summary: "Curated series of posts covering a particular theme.",
      },
    },
    {
      url: "http://lloydyweb.paulrobertlloyd.com/blog/archive/",
      data: {
        title: "1999-2007",
        summary:
          "Content written prior to 2008 can be found on my previous website.",
      },
    },
  ];

  return {
    other: otherArchives,
  };
};
