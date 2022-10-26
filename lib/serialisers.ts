import { TaiTimestamp } from "./index";

export function taiTimestampToString(ts: TaiTimestamp): string {
  return `${ts.seconds}.${ts.nanosecs.toString().padStart(9, "0")}`;
}

export function taiTimestampToMediaTimestamp(ts: TaiTimestamp): string {
  return `${ts.seconds}:${ts.nanosecs.toString().padStart(9, "0")}`;
}

export function taiTimestampToNanoseconds(ts: TaiTimestamp): bigint {
  return BigInt(ts.seconds) * 1000000000n + BigInt(ts.nanosecs);
}
