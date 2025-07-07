export const kebab = (input: string): string => {
  const splitInput = input.toLowerCase().split(/\W+/g);
  return splitInput.join('-');
};
