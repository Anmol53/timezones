const timezones = require("../data/timezone.js")

const getAllTimezoneDetails = () => {
  return timezones;
};

const getTimezoneDetails = (timezone) => {
  if (!timezone) {
    return { status: "Invalid call: timezone is required field" };
  }
  const searchResult = timezones.filter(
    (zone) => zone.zone.toLowerCase() === timezone.toLowerCase()
  );
  if (searchResult && searchResult.length > 0) {
    return { status: "OK", ...searchResult[0] };
  }
  return { status: "Zone Not Found" };
};

const getOffset = (zone) => {
  if (!zone) {
    return { status: "Invalid call: zone is required field" };
  }
  const zoneDetails = getTimezoneDetails(zone);
  if (zoneDetails.status !== "OK") {
    return { status: zoneDetails.status };
  }
  return { status: "OK", utc_offset: zoneDetails.utc_offset };
};

const convertFromUTC = ({ date, utc_offset, zone } = {}) => {
  if (!(date instanceof Date)) {
    return { status: "Invalid Date" };
  }
  const offsetRegex = /^([+-](?:2[0-3]|[01][0-9]):[0-5][0-9])$/;
  if (utc_offset && !offsetRegex.test(utc_offset)) {
    return { status: "Invalid Offset" };
  }
  if (utc_offset === "-00:00") {
    utc_offset = "+00:00";
  }
  if (utc_offset && zone) {
    const offset = getOffset(zone);
    if (offset.status !== "OK") {
      return { status: offset.status };
    }
    if (utc_offset !== offset.utc_offset) {
      return { status: "utc_offset does not matched with zone" };
    }
  }
  if (!utc_offset) {
    if (!zone) {
      return { status: "OK", iso_date: date.toISOString() };
    }
    const offset = getOffset(zone);
    if (offset.status !== "OK") {
      return { status: offset.status };
    }
    utc_offset = offset.utc_offset;
  }
  if (utc_offset === "+00:00" || utc_offset === "-00:00") {
    return { status: "OK", iso_date: date.toISOString() };
  }
  let hourOffset = Number(utc_offset.substring(1, 3));
  let minuteOffset = Number(utc_offset.substring(4, 6));
  if (utc_offset[0] === "-") {
    hourOffset *= -1;
    minuteOffset *= -1;
  }
  const input_iso_date = date.toISOString();
  const currentUTC = new Date(input_iso_date);
  currentUTC.setHours(currentUTC.getHours() + hourOffset);
  currentUTC.setMinutes(currentUTC.getMinutes() + minuteOffset);
  return {
    status: "OK",
    iso_date: currentUTC.toISOString().replace("Z", utc_offset),
  };
};

const convertToUTC = ({ date } = {}) => {
  if (!(date instanceof Date)) {
    return { status: "Invalid Date" };
  }
  return {
    status: "OK",
    iso_date: date.toISOString(),
  };
};

const getCurrentDateTime = ({ utc_offset, zone } = {}) => {
  return convertFromUTC({ date: new Date(), utc_offset, zone });
};

exports.getAllTimezoneDetails = getAllTimezoneDetails;
exports.getTimezoneDetails = getTimezoneDetails;
exports.getOffset = getOffset;
exports.convertFromUTC = convertFromUTC;
exports.convertToUTC = convertToUTC;
exports.getCurrentDateTime = getCurrentDateTime;