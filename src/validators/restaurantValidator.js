const restaurantValidator = {
  isValidLink(link) {
    const regex =
      /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(:[0-9]+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;
    return regex.test(link);
  },

  isInRange(value, min, max) {
    const valueLength = value.length;

    return valueLength <= max && valueLength > min;
  },

  isSelected(value) {
    return value !== "";
  },
};

export default restaurantValidator;