const re = list => {
  return list.reduce(
    (acc, cur) => ({
      ...acc,
      [cur]: 0
    }),
    {}
  );
};

const birthdays = contacts => {
  return contacts.reduce((acc, cur) => {
    return {
      ...acc,
      [cur.birthday]: acc[cur.birthday]
        ? [...acc[cur.birthday], cur.name]
        : [cur.name]
    };
  }, {});
};

module.exports = {
  re,
  birthdays
};
