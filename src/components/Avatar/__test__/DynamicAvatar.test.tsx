import { act, create, ReactTestRendererJSON } from "react-test-renderer";
import { DynamicAvatar } from "../DynamicAvatar";

describe("unit test for Dynamic Avatar", () => {
  it("render", async () => {
    const mockUserWithPhoto = {
      photo: null,
      firstname: "John",
      status: true,
    };

    await act(async () => {
      const rendered = create(<DynamicAvatar user={mockUserWithPhoto} />);
      const tree = rendered.toJSON();
      if (tree && "children" in tree && tree.children) {
        const children = tree.children[0] as ReactTestRendererJSON;
        const children2 = children.children?.at(0) as ReactTestRendererJSON;
        // Assert presence of Avatar.Image
        expect(children.type).toBe("View"); // Check parent View first
        expect(children2.type).toBe("Avatar.Image");

        // Assert presence of status dot (if applicable)
        expect(children.children?.length).toBe(2); // Check for two children
      }
    });
  });
});
