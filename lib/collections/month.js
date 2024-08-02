export const month = () => {
  const monthsSet = new Set();

  let current = new Date("2008-09");
  while (current <= new Date()) {
    const year = current.getFullYear();
    const month = String(current.getMonth() + 1).padStart(2, "0");

    monthsSet.add({
      key: `${year}-${month}`,
      data: {
        title: Intl.DateTimeFormat("en-GB", {
          month: "long",
          year: "numeric",
        }).format(current),
        item_title: Intl.DateTimeFormat("en-GB", {
          month: "long",
        }).format(current),
      },
      url: `/${year}/${month}/`,
    });

    // Move to the next month
    current.setMonth(current.getMonth() + 1);
  }

  return [...monthsSet];
};
