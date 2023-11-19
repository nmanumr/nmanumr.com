export const compareByDate = (a, b) =>
  +(b.data.endDate ?? b.data.startDate) -
  +(a.data.endDate ?? a.data.startDate);
