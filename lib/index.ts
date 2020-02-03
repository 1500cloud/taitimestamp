import { add, equals, gt, gte, lt, lte, subtract } from "./operators";
import {
  taiTimestampFromJsTime,
  taiTimestampFromMediaTimestamp,
  taiTimestampFromNanoseconds,
  taiTimestampFromString,
} from "./parsers";
import {
  taiTimestampToMediaTimestamp,
  taiTimestampToString,
  taiTimestampToNanoseconds,
} from "./serialisers";

export interface TaiTimestamp {
  readonly seconds: number;
  readonly nanosecs: number;
}

export type UtcTimestamp = number;

export function now(): TaiTimestamp {
  return taiTimestampFromJsTime(Date.now());
}

export {
  taiTimestampToString,
  taiTimestampToMediaTimestamp,
  taiTimestampToNanoseconds,
  taiTimestampFromString,
  taiTimestampFromMediaTimestamp,
  taiTimestampFromNanoseconds,
  taiTimestampFromJsTime,
  add,
  equals,
  gt,
  gte,
  lt,
  lte,
  subtract,
};
