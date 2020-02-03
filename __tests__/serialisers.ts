import { taiTimestampToNanoseconds, taiTimestampToString } from "../lib/serialisers";

describe("taiTimestampToString()", () => {
  it("correctly pads the nanoseconds", () => {
    expect(taiTimestampToString({ seconds: 500, nanosecs: 42 })).toEqual("500.000000042");
  });
});

describe("taiTimestampToNanoseconds()", () => {
  it("correctly returns a number of nanoseconds", () => {
    // matchers don't appear to support BigInt
    expect(
      taiTimestampToNanoseconds({ seconds: 500, nanosecs: 42 }) === 500000000042n,
    ).toBeTruthy();
  });
});
