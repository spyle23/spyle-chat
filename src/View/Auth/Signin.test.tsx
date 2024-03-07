import renderer, { ReactTestRendererJSON } from "react-test-renderer";
import Signin from "./Signin";
describe("test render signin", () => {
  it("text", () => {
    const tree = renderer.create(<Signin />);
    const children = (tree.toJSON() as ReactTestRendererJSON).children;
  });
});
