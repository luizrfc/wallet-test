import { renderHook } from "@testing-library/react-hooks";

import useButton from "../buttonHooks";
import { Colors } from "../../../styles/themeStyle";

describe("Button hooks", () => {
  const { result } = renderHook(() => useButton());

  it("should returns default value", () => {
    expect(typeof result.current.fontColor).toBe("function");
  });

  describe("Return correctly color", () => {
    it("should return diesabled color", () => {
      expect(result.current.fontColor(true, "disabled")).toEqual(Colors.grey);
    })
    it("should return default color = primary", () => {
      expect(result.current.fontColor(false, "yellow")).toEqual(Colors.primary);
    })
    it("should return primary color", () => {
      expect(result.current.fontColor(false, "primary")).toEqual(Colors.blueDark);
    })
    it("Return icon color", () => {
      expect(result.current.fontColor(false, "icon")).toEqual(Colors.secondary);
    });
    it("Return disabled color", () => {
      expect(result.current.fontColor(false, "disabled")).toEqual(Colors.grey);
    });
    it("Return secondary color", () => {
      expect(result.current.fontColor(false, "secondary")).toEqual(Colors.white);
    });
    it("Return rounded color", () => {
      expect(result.current.fontColor(false, "rounded")).toEqual(Colors.white);
    });
  });

});
