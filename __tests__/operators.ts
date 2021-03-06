import { add, equals, gt, gte, lt, lte, subtract } from "../lib/operators";
import { taiTimestampFromString } from "../lib";

describe("equals", () => {
  it("has two equal timestamps equal each other", () => {
    expect(equals(taiTimestampFromString("1.0"), taiTimestampFromString("1.0"))).toBeTruthy();
  });

  it("has two different timestamps not equal each other", () => {
    expect(equals(taiTimestampFromString("1.0"), taiTimestampFromString("2.0"))).toBeFalsy();
  });
});

describe("gt", () => {
  it("a is not greater than b when a and b are equal", () => {
    expect(gt(taiTimestampFromString("1.0"), taiTimestampFromString("1.0"))).toBeFalsy();
  });

  it("a is not greater than b when a is earlier than b", () => {
    expect(gt(taiTimestampFromString("1.0"), taiTimestampFromString("2.0"))).toBeFalsy();
  });

  it("a is greater than b when a is later than b", () => {
    expect(gt(taiTimestampFromString("2.0"), taiTimestampFromString("1.0"))).toBeTruthy();
  });
});

describe("gte", () => {
  it("a is greater than or equal to b when a and b are equal", () => {
    expect(gte(taiTimestampFromString("1.0"), taiTimestampFromString("1.0"))).toBeTruthy();
  });

  it("a is not greater than or equal to b when a is earlier than b", () => {
    expect(gte(taiTimestampFromString("1.0"), taiTimestampFromString("2.0"))).toBeFalsy();
  });

  it("a is greater than or equal to b when a is later than b", () => {
    expect(gte(taiTimestampFromString("2.0"), taiTimestampFromString("1.0"))).toBeTruthy();
  });
});

describe("lt", () => {
  it("a is not less than b when a and b are equal", () => {
    expect(lt(taiTimestampFromString("1.0"), taiTimestampFromString("1.0"))).toBeFalsy();
  });

  it("a is less than b when a is earlier than b", () => {
    expect(lt(taiTimestampFromString("1.0"), taiTimestampFromString("2.0"))).toBeTruthy();
  });

  it("a is not less than b when a is later than b", () => {
    expect(lt(taiTimestampFromString("2.0"), taiTimestampFromString("1.0"))).toBeFalsy();
  });
});

describe("lte", () => {
  it("a is less than or equal b when a and b are equal", () => {
    expect(lte(taiTimestampFromString("1.0"), taiTimestampFromString("1.0"))).toBeTruthy();
  });

  it("a is less than or equal to b when a is earlier than b", () => {
    expect(lte(taiTimestampFromString("1.0"), taiTimestampFromString("2.0"))).toBeTruthy();
  });

  it("a is not less than or equal to b when a is later than b", () => {
    expect(lte(taiTimestampFromString("2.0"), taiTimestampFromString("1.0"))).toBeFalsy();
  });
});

describe("add", () => {
  it("simply adds up 2 numbers", () => {
    expect(
      equals(
        add(taiTimestampFromString("10.0"), taiTimestampFromString("4.0")),
        taiTimestampFromString("14.0"),
      ),
    ).toBeTruthy();
  });

  it("correctly carries", () => {
    expect(
      equals(
        add(taiTimestampFromString("10.9"), taiTimestampFromString("1.9")),
        taiTimestampFromString("12.8"),
      ),
    ).toBeTruthy();
  });
});

describe("subtract", () => {
  it("simply subtracts 2 numbers", () => {
    expect(
      equals(
        subtract(taiTimestampFromString("10.0"), taiTimestampFromString("4.5")),
        taiTimestampFromString("5.5"),
      ),
    ).toBeTruthy();
  });

  it("correctly carries", () => {
    expect(
      equals(
        subtract(taiTimestampFromString("10.1"), taiTimestampFromString("1.2")),
        taiTimestampFromString("8.9"),
      ),
    ).toBeTruthy();
  });
});
