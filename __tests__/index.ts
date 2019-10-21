import { now, taiTimestampFromString, taiTimestampToString } from "../lib";

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
