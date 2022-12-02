export const progressPercentage = (percent) => {
  if (percent <= 3) {
    return "rgba(225, 76, 48)";
  } else if (percent <= 7) {
    return "rgba(255, 227, 2)";
  } else if (percent <= 10) {
    return "rgba(18, 217, 0)";
  }
};
