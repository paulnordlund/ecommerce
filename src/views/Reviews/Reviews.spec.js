import React from "react";
import { shallow } from "enzyme";
import Reviews from "./Reviews";

describe("Reviews", () => {
  it("renders", () => {
    const props = {
      store: {}
    };

    const wrapper = shallow(<Reviews {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
