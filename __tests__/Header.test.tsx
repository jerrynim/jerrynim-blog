import React from "react";
import { MemoryRouter } from "react-router-dom";
import toJson from "enzyme-to-json";
import { mount } from "enzyme";
import HeaderContainer from "../components/Header/index";

describe("Layout-Footer", () => {
  it("should render the component without errors", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[{ pathname: "/", key: "testKey" }]}>
        <HeaderContainer />
      </MemoryRouter>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
