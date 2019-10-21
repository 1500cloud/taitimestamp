import { jsTimeToTaiTimestamp, now, taiTimestampFromString, taiTimestampToString } from "../lib";

describe("now()", () => {
  const dateNow = Date.now;
  Date.now = jest.fn().mockReturnValue(15716770455432);

  it("returns a TAI timestamp representing now, taking into account timestamps", () => {
    // this is not the greatest
    expect(now()).toEqual({ seconds: 15716770492, nanosecs: 432000000 });
  });

  afterEach(() => {
    Date.now = dateNow;
  });
});

describe("jsTimeToTaiTimestamp", () => {
  it("takes into account leap seconds", () => {
    expect(jsTimeToTaiTimestamp(Date.parse("01 Jul 1972 00:00:01 GMT"))).toEqual({
      seconds: 78796812,
      nanosecs: 0,
    });
  });

  it("increases on the threshold", () => {
    expect(jsTimeToTaiTimestamp(Date.parse("01 Jul 1972 00:00:00 GMT"))).toEqual({
      seconds: 78796811,
      nanosecs: 0,
    });
  });

  it("does not increase until the threshold is reached", () => {
    expect(jsTimeToTaiTimestamp(Date.parse("30 Jun 1972 23:59:59 GMT"))).toEqual({
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

describe("taiTimestampToString()", () => {
  it("correctly pads the nanoseconds", () => {
    expect(taiTimestampToString({ seconds: 500, nanosecs: 42 })).toEqual("500.000000042");
  });
});
