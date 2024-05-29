// formatDuration.js
const getCourseDuration = (minutes) => {
  const hh = Math.floor(minutes / 60);
  const mm = minutes % 60;
  const formattedHh = hh < 10 ? `0${hh}` : hh;
  const formattedMm = mm < 10 ? `0${mm}` : mm;
  const hourLabel = hh === 1 ? "hour" : "hours";
  return `${formattedHh}:${formattedMm} ${hourLabel}`;
};

export default getCourseDuration;
