const phoneDirectory = contact => {
  const matchName = /<(.+?)>/;
  const matchPhone = /(\+\d+)/;
  
  const [, name] = contact.match(matchName);
  const [, phone] = contact.match(matchPhone);

  const address = contact.replace(matchName, "").replace(matchPhone, "");
  console.log(address);

  return {
    name,
    phone,
    address: address.trim()
  };
};

module.exports = phoneDirectory;
