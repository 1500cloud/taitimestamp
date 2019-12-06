# taitimestamp

A JavaScript/TypeScript library for manipulating TAI timestamps to nanosecond
precision (e.g., for representing PTP time).

Licensed under the [Apache License](./LICENSE) and given back to the
community by [1500 Cloud](https://www.1500cloud.com/).

## Installation

    npm i --save @1500cloud/taitimestamp

or

    yarn add @1500cloud/taitimestamp

## Usage

e.g.,

    import { now } from "@1500cloud/taitimestamp";

or

    const { now } = require("@1500cloud/taitimestamp");

The type `TaiTimestamp` is used to represent this in TypeScript. This is
officially an object, but please use the built-in helpers to convert other
domains.

### `now(): TaiTimestamp`

Returns a string representing a TAI Timestamp for the current date. This is
limited to the millisecond resolution of the underlying JavaScript platform.

### `taiTimestampFromJsTime(number): TaiTimestamp`

Takes a JavaScript timestamp (e.g., `new Date().getTime()`) and converts it
to a TAI Timestamp object (limited to the millisecond precision of a
JavaScript date object).

### `taiTimestampFromString(string): TaiTimestamp | null`

This takes a string like `"123455.66"` which represents a fractional number
of seconds since the Unix epoch and converts it into an object. (Strings are
used to maintain precision).

### `taiTimestampFromMediaTimestamp(string): TaiTimestamp | null`

This takes a string like `"123455:678000000"` as used to represent time in
the broadcasting domain (e.g., NMOS APIs) and returns a TaiTimestamp object.

### `taiTimestampToString(TaiTimestamp): string`

This converts a TaiTimestamp object to a string representation.

### `taiTimestampToMediaTimestamp(TaiTimestamp): string`

This converts a TaiTimestamp object to a string representation for TAI time
as used in broadcasting (e.g., NMOS APIs).

### `equals(TaiTimestamp, TaiTimestamp): boolean`

This compares two timestamp objects and returns if they are equal or not.

### `gt(TaiTimestamp, TaiTimestamp): boolean`

This compares two timestamp objects and returns whether or not the first is
greater (later) than the second.

### `gte(TaiTimestamp, TaiTimestamp): boolean`

This compares two timestamp objects and returns whether or not the first is
greater (later) than or equal to the second.

### `lt(TaiTimestamp, TaiTimestamp): boolean`

This compares two timestamp objects and returns whether or not the first is
less (earlier) than the second.

### `lte(TaiTimestamp, TaiTimestamp): boolean`

This compares two timestamp objects and returns whether or not the first is
less (earlier) than or equal to the second.

### `add(TaiTimestamp, TaiTimestamp): TaiTimestamp`

This adds two TaiTimestamps together and returns the result. This only really
makes sense if you think of at least one of the TaiTimestamps as a duration,
as adding together two absolute times doesn't really make sense.

## Changelog

Semantic versioning is in use here. Please see the GitHub releases page for
change information.

## Contributing

Contributions are welcomed in the form of bug reports, bug fixes or feature
improvements! If you're unsure on the change you want to make, please open
an issue on GitHub first to discuss with the maintainers. Please note that by
contributing back to this project you agree to assign copyright of any code
modifications to 1500 Services Ltd. Please also see our [code of conduct](./CODE_OF_CONDUCT.md).

- Run unit tests: `yarn test`
- Run a test watcher: `yarn dev`
