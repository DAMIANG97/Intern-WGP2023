export const cardOptions = [
  { code: 'ma', name: 'Maestro' },
  { code: 'vi', name: 'Visa' },
];
export const cardExpirationMonth = Array.from({ length: 12 }, (_value, index) => `${index + 1}`).map((month) => {
  return { name: month.padStart(2, '0'), code: month.padStart(2, '0') };
});
export const cardExpirationYear = Array.from(
  { length: 10 },
  (_value, index) => `${new Date().getFullYear() + index}`,
).map((year) => {
  return { name: year, code: year };
});
