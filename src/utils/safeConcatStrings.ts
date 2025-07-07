export const safeConcatStrings = (strings: (string | null | undefined)[], delimiter?: string): string => {
  const filteredStrings = strings.filter((_string) => !!_string);
  return filteredStrings.join(delimiter || ' ');
};
