module.exports = {
  getDateInFormat(date) {
    const localDate = new Date(date);
    const _date = `${localDate.getDate()}-${localDate.getMonth()}-${localDate.getFullYear()}`;
    return _date;
  }
};
