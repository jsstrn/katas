const parseQueryToString = query => {
  if (!query) {
    throw new Error("Please include a query, dammit!");
  }

  if (Object.entries(query).length === 0) {
    return "?";
  }

  const keys = Object.keys(query);
  const keyValuePair = keys.map(key => {
    return `${key}=${query[key]}`;
  });

  return `?${keyValuePair.join("&")}`;
};

module.exports = parseQueryToString;
