export const getRandomBG = () => {
  const colors = [
    '#b73e3e',
    '#5b45b0',
    '#7f167f',
    '#735f32',
    '#1d2569',
    '#285430',
    '#7F00FF',
    '#008080',
    '#32cd32',
    '#FF00FF',
    '#FF66CC ',
    '#4B0082',
    '#0000FF',
    '#50C878',
  ];
  const color = colors[Math.floor(Math.random() * colors.length)];
  return { backgroundColor: color };
};

export const getBgColor = () => {
  const bgArr = [
    '#b73e3e',
    '#5b45b0',
    '#7f167f',
    '#735f32',
    '#1d2569',
    '#285430',
    '#7F00FF',
    '#008080',
    '#32cd32',
    '#FF00FF',
    '#FF66CC ',
    '#4B0082',
    '#0000FF',
    '#50C878',
  ];
  const randomBg = Math.floor(Math.random() * bgArr.length);
  const color = bgArr[randomBg];
  return { backgroundColor: color };
};

export const getAvatarName = (name: string) => {
  if (!name) return '';

  return name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase();
};

export const formatDate = (date: Date): string => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return `${months[date.getMonth()]} ${String(date.getDate()).padStart(
    2,
    '0'
  )}, ${date.getFullYear()}`;
};

export const formatTime = (date: Date): string => {
  return `${String(date.getHours()).padStart(2, '0')}:${String(
    date.getMinutes()
  ).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;
};
