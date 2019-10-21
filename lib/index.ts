export interface TaiTimestamp {
  readonly seconds: number;
  readonly nanosecs: number;
}

export type UtcTimestamp = number;

if (Date.now() > new Date("2020-06-28").getTime()) {
  console.warn("Leap second database is out of date - safety is not guaranteed");
  console.warn("Please consider updating @1500cloud/taitimestamp");
}

// https://www.ietf.org/timezones/data/leap-seconds.list
const LEAPSECONDS = [
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
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
];

export function jsTimeToTaiTimestamp(utcTimestamp: UtcTimestamp): TaiTimestamp {
  const taiTimestamp = {
    seconds: Math.floor(utcTimestamp / 1000),
    nanosecs: (utcTimestamp % 1000) * 1000000,
  };
  LEAPSECONDS.forEach(threshold => {
    if (threshold < taiTimestamp.seconds) {
      taiTimestamp.seconds += 1;
    }
  });
  return taiTimestamp;
}

export function taiTimestampFromString(tsString: string): TaiTimestamp | null {
  const parts = tsString.split(".");
  if (parts.length !== 2) {
    return null;
  }
  const timestamp = {
    seconds: parseInt(parts[0], 10),
    nanosecs: parseInt(parts[1], 10) * 10 ** (9 - parts[1].length),
  };
  if (isNaN(timestamp.seconds) || isNaN(timestamp.nanosecs)) {
    return null;
  }
  return timestamp;
}

export function equals(a: TaiTimestamp, b: TaiTimestamp): boolean {
  return a.seconds === b.seconds && a.nanosecs === b.nanosecs;
}

export function now(): TaiTimestamp {
  return jsTimeToTaiTimestamp(Date.now());
}

export function taiTimestampToString(ts: TaiTimestamp): string {
  return `${ts.seconds}.${ts.nanosecs.toString().padStart(9, "0")}`;
}

export function taiTimestampToMediaTimestamp(ts: TaiTimestamp): string {
  return `${ts.seconds}:${ts.nanosecs.toString().padStart(9, "0")}`;
}
