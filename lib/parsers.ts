import LEAPSECONDS from "./leapseconds";
import { TaiTimestamp, UtcTimestamp } from "./index";

export function taiTimestampFromJsTime(utcTimestamp: UtcTimestamp): TaiTimestamp {
  const utcSeconds = Math.floor(utcTimestamp / 1000);
  const taiTimestamp = {
    seconds: utcSeconds,
    nanosecs: (utcTimestamp % 1000) * 1000000,
  };
  LEAPSECONDS.forEach(threshold => {
    if (threshold <= utcSeconds) {
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

export function taiTimestampFromMediaTimestamp(tsString: string): TaiTimestamp | null {
  const parts = tsString.split(":");
  if (parts.length !== 2) {
    return null;
  }
  const timestamp = {
    seconds: parseInt(parts[0], 10),
    nanosecs: parseInt(parts[1], 10),
  };
  if (isNaN(timestamp.seconds) || isNaN(timestamp.nanosecs)) {
    return null;
  }
  return timestamp;
}

export function taiTimestampFromNanoseconds(nanosecs: bigint): TaiTimestamp | null {
  return {
    seconds: Number(nanosecs / 1000000000n),
    nanosecs: Number(nanosecs % 1000000000n),
  };
}
