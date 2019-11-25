import { now } from "../lib";

describe("now()", () => {
  const dateNow = Date.now;

  beforeEach(() => {
    Date.now = jest.fn().mockReturnValue(15716770455432);
  });

  it("returns a TAI timestamp representing now, taking into account timestamps", () => {
    // this is not the greatest
    expect(now()).toEqual({ seconds: 15716770492, nanosecs: 432000000 });
  });

  afterEach(() => {
    Date.now = dateNow;
  });
});
