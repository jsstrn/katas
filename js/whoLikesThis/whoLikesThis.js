function whoLikesThis(names) {
  const everyone = {
    0: "no one",
    1: `${names[0]}`,
    2: `${names[0]} and ${names[1]}`,
    3: `${names[0]}, ${names[1]} and ${names[2]}`,
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others`
  };

  let key = Math.min(4, names.length)
  let someone = everyone[key];
  let likes = names.length < 2 ? "likes" : "like";

  return `${someone} ${likes} this`;
}

module.exports = whoLikesThis;
