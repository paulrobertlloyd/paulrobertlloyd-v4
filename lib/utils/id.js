import { DateToSxg as dateToSxg } from "newbase60";

export const getId = (data) => {
  const date = data.start || data.page.date;
  const sxg = dateToSxg(new Date(date));
  const index = data.type_index || data.page.fileSlug || 1;
  const prefix = data.type_prefix;

  return prefix && `${prefix}${sxg}${index}`;
};
