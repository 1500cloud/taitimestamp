import { taiTimestampToString } from "../lib/serialisers";

describe("taiTimestampToString()", () => {
  it("correctly pads the nanoseconds", () => {
    expect(taiTimestampToString({ seconds: 500, nanosecs: 42 })).toEqual("500.000000042");
  });
});
