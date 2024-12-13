export const findOccurrences = (text, searchText, caseSensitive) => {
  if (!searchText) return 0;
  
  const regex = new RegExp(searchText, caseSensitive ? 'g' : 'gi');
  const matches = text.match(regex);
  return matches ? matches.length : 0;
};

export const performReplace = (text, findText, replacement, caseSensitive) => {
  if (!findText) return text;
  
  if (caseSensitive) {
    return text.replaceAll(findText, replacement);
  }
  const regex = new RegExp(findText, 'gi');
  return text.replaceAll(regex, replacement);
};