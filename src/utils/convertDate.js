const convertDate = (time) => {
  const newDate = new Date(time);
  const month = newDate.toLocaleString('en', { month: 'short' });
  const date = newDate.getDate();
  const year = newDate.getFullYear();
  return `${month} ${date}, ${year}`;
};

export default convertDate;
