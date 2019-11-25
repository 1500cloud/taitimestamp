import { TaiTimestamp } from "./index";

export function taiTimestampToString(ts: TaiTimestamp): string {
  return `${ts.seconds}.${ts.nanosecs.toString().padStart(9, "0")}`;
}

export function taiTimestampToMediaTimestamp(ts: TaiTimestamp): string {
  return `${ts.seconds}:${ts.nanosecs.toString().padStart(9, "0")}`;
}
