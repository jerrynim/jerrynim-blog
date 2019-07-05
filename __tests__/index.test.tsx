import * as React from "react";
import { mount } from "enzyme";
import IndexPage from "../pages/index";
import * as renderer from "react-test-renderer";
describe("Pages", () => {
  describe("Index", () => {
    it("should render without throwing an error", function() {
      const wrap = mount(<IndexPage />);
      expect(wrap.find("div").text()).toBe("Hello Next.js");
      const component = renderer.create(<IndexPage />);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
