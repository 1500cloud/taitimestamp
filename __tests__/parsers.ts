import {
  taiTimestampFromJsTime,
  taiTimestampFromMediaTimestamp,
  taiTimestampFromString,
} from "../lib/parsers";

describe("taiTimestampFromJsTime", () => {
  it("takes into account leap seconds", () => {
    expect(taiTimestampFromJsTime(Date.parse("01 Jul 1972 00:00:01 GMT"))).toEqual({
      seconds: 78796812,
      nanosecs: 0,
    });
  });

  it("increases on the threshold", () => {
    expect(taiTimestampFromJsTime(Date.parse("01 Jul 1972 00:00:00 GMT"))).toEqual({
      seconds: 78796811,
      nanosecs: 0,
    });
  });

  it("does not increase until the threshold is reached", () => {
    expect(taiTimestampFromJsTime(Date.parse("30 Jun 1972 23:59:59 GMT"))).toEqual({
      seconds: 78796809,
      nanosecs: 0,
    });
  });
});

describe("taiTimestampFromString()", () => {
  it("returns a TAI timestamp from a rational string representation", () => {
    expect(taiTimestampFromString("500.42")).toEqual({ seconds: 500, nanosecs: 420000000 });
  });

  it("correctly returns null if something invalid is passed in", () => {
    expect(taiTimestampFromString("not a timestamp string")).toBeNull();
  });

  it("correctly returns null if something that's NaN is passed in", () => {
    expect(taiTimestampFromString("NaN.NaN")).toBeNull();
  });
});

describe("taiTimestampFromMediaTimestamp()", () => {
  it("returns a TAI timestamp from a rational string representation", () => {
    expect(taiTimestampFromMediaTimestamp("500:42")).toEqual({ seconds: 500, nanosecs: 42 });
  });

  it("correctly returns null if something invalid is passed in", () => {
    expect(taiTimestampFromMediaTimestamp("not a timestamp string")).toBeNull();
  });
});
