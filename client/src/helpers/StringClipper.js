export const clipStr = (m, n) => {
  let result = m;
  if (m.length > n) {
    let clippedStr = m.slice(0, n);
    result = clippedStr += "...";
    return result;
  }
  return result;
};
