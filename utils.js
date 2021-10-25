const letterMap = (str)=> {
  return str.split('').filter(ltr => ltr.trim()).reduce((acc, ltr)=> {
    acc[ltr] = acc[ltr] || 0;
    acc[ltr]++;
    return acc;
  }, {});
};

const letterMapCountSpaces = (str)=> {
  return str.split('').reduce((acc, ltr)=> {
    acc[ltr] = acc[ltr] || 0;
    acc[ltr]++;
    return acc;
  }, {});
};

module.exports = {
  letterMap,
  letterMapCountSpaces
};
