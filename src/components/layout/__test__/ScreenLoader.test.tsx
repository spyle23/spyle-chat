import { act, create, ReactTestInstance } from "react-test-renderer";
import { ScreenLoader } from "../ScreenLoader";
import React from "react";
import { View } from "react-native";

describe("test render for Screen Loader", () => {
  it("test", async () => {
    await act(async () => {
      const rendered = create(
        <ScreenLoader>
          <View />
        </ScreenLoader>
      );
      await new Promise((resolve) => setTimeout(resolve, 0));
      const loader = rendered.root.findAllByProps({
        testID: "activity-indicator",
      });
      expect(loader).toBeTruthy();

      const content = rendered.root.findAllByProps({ testID: "content" });
      expect(content).toBeTruthy();
    });
  });
});
