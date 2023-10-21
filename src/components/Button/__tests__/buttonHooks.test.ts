import { renderHook } from "@testing-library/react-hooks";

import useButton from "../buttonHooks";

describe("Button hooks", () => {
  const { result } = renderHook(() => useButton());

  it("should returns default value", () => {
    expect(typeof result.current.fontColor).toBe("function");
  });

  it("Return correctly color", () => {
    expect(result.current.fontColor(false, "primary")).toEqual("#142995");
  });

  it("Return a color to disabled button", () => {
    expect(result.current.fontColor(true, "disable")).toEqual("#BBB");
  });
});
