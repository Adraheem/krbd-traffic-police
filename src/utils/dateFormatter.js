const date_formatter = (q) => {
  let d = new Date(q);
  let ye = new Intl.DateTimeFormat("en", { year: "2-digit" }).format(d);
  let mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
  let da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
  let ap = new Intl.DateTimeFormat("en", { timeStyle: "medium" }).format(d);
  return `${mo}. ${da}, ${ye} ${ap}`;
};

export default date_formatter;
