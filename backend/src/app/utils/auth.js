const formatKey = key => {
  const beginKey = '-----BEGIN PUBLIC KEY-----';
  const endKey = '-----END PUBLIC KEY-----';

  const sanatizedKey = key
    .replace(beginKey, '')
    .replace(endKey, '')
    .replace('\n', '');

  const keyArray = sanatizedKey.split('').map((l, i) => {
    const position = i + 1;
    const isLastCharacter = sanatizedKey.length === position;
    if (position % 64 === 0 || isLastCharacter) {
      return `${l}\n`;
    }
    return l;
  });

  return `${beginKey}\n${keyArray.join('')}${endKey}\n`;
};

export default formatKey;
