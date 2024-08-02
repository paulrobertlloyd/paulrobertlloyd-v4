export const year = () => {
  const yearsSet = new Set();

  let current = 2008;
  while (current <= new Date().getFullYear()) {
    const year = current;

    yearsSet.add({
      key: year,
      data: {
        title: `${year}`,
      },
      url: `/${year}/`,
    });

    // Move to the next year
    current = current + 1;
  }

  return [...yearsSet].reverse();
};
