import { TaiTimestamp } from "./index";

export function equals(a: TaiTimestamp, b: TaiTimestamp): boolean {
  return a.seconds === b.seconds && a.nanosecs === b.nanosecs;
}

export function gt(a: TaiTimestamp, b: TaiTimestamp): boolean {
  return a.seconds > b.seconds || (a.seconds === b.seconds && a.nanosecs > b.nanosecs);
}

export function gte(a: TaiTimestamp, b: TaiTimestamp): boolean {
  return a.seconds > b.seconds || (a.seconds === b.seconds && a.nanosecs >= b.nanosecs);
}

export function lt(a: TaiTimestamp, b: TaiTimestamp): boolean {
  return a.seconds < b.seconds || (a.seconds === b.seconds && a.nanosecs < b.nanosecs);
}

export function lte(a: TaiTimestamp, b: TaiTimestamp): boolean {
  return a.seconds < b.seconds || (a.seconds === b.seconds && a.nanosecs <= b.nanosecs);
}

export function add(a: TaiTimestamp, b: TaiTimestamp): TaiTimestamp {
  return {
    seconds: a.seconds + b.seconds + Math.floor((a.nanosecs + b.nanosecs) / 1000000000),
    nanosecs: (a.nanosecs + b.nanosecs) % 1000000000,
  };
}
