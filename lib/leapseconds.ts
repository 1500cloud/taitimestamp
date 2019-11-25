if (Date.now() > new Date("2020-06-28").getTime()) {
  console.warn("Leap second database is out of date - safety is not guaranteed");
  console.warn("Please consider updating @1500cloud/taitimestamp");
}

// https://www.ietf.org/timezones/data/leap-seconds.list
// the list above has an epoch of 1900, so this is computed to 1970 epoch below
const LEAPSECONDS = [
  2272060800,
  2272060800,
  2272060800,
  2272060800,
  2272060800,
  2272060800,
  2272060800,
  2272060800,
  2272060800,
  2272060800,
  2287785600,
  2303683200,
  2335219200,
  2366755200,
  2398291200,
  2429913600,
  2461449600,
  2492985600,
  2524521600,
  2571782400,
  2603318400,
  2634854400,
  2698012800,
  2776982400,
  2840140800,
  2871676800,
  2918937600,
  2950473600,
  2982009600,
  3029443200,
  3076704000,
  3124137600,
  3345062400,
  3439756800,
  3550089600,
  3644697600,
  3692217600,
].map(ts => ts - 2208988800);

export default LEAPSECONDS;
