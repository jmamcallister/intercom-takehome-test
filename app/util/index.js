const degreesToRadians = (degrees) => {
  return degrees * (Math.PI / 180);
};

const greatCircleDistance = (lat1, lon1, lat2, lon2) => {
  const lat1Rads = degreesToRadians(lat1);
  const lat2Rads = degreesToRadians(lat2);
  const centralAngleRads = degreesToRadians(lon2 - lon1);
  const earthRadius = 6371e3;
  // eslint-disable-next-line
  return Math.acos((Math.sin(lat1Rads) * Math.sin(lat2Rads)) + (Math.cos(lat1Rads) * Math.cos(lat2Rads) * Math.cos(centralAngleRads))) * earthRadius;
};

module.exports = { degreesToRadians, greatCircleDistance };
