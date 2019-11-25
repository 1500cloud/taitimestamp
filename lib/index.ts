import { equals } from "./operators";
import {
  taiTimestampFromJsTime,
  taiTimestampFromMediaTimestamp,
  taiTimestampFromString,
} from "./parsers";
import { taiTimestampToMediaTimestamp, taiTimestampToString } from "./serialisers";

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
  taiTimestampFromString,
  taiTimestampFromMediaTimestamp,
  taiTimestampFromJsTime,
  equals,
};
