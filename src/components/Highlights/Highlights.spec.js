import React from "react";
import { shallow } from "enzyme";
import Highlights from "./Highlights";

describe("Highlights", () => {
  it("renders", () => {
    const wrapper = shallow(<Highlights />);

    expect(wrapper).toMatchSnapshot();
  });
});
