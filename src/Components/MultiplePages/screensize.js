const isMobilePortrait = (doc) => {
  const heightOutput = doc.documentElement.clientHeight;
  const widthOutput = doc.documentElement.clientWidth;
  return heightOutput >= widthOutput && widthOutput <= 414;
};

const isPortrait = (doc) => {
  const heightOutput = doc.documentElement.clientHeight;
  const widthOutput = doc.documentElement.clientWidth;
  return heightOutput >= widthOutput;
};

exports.isMobilePortrait = isMobilePortrait;
exports.isPortrait = isPortrait;
