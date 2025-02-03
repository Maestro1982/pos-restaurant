export const getRandomBG = () => {
  const colors = ['#f6b100', '#025cca', '#02ca3a', '#800080'];
  const color = colors[Math.floor(Math.random() * colors.length)];
  return { backgroundColor: color };
};
