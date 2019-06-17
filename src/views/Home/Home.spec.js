import React from "react";
import { shallow } from "enzyme";
import Home from "./Home";

describe("Home", () => {
  it("renders", () => {
    const props = {
      store: {}
    };

    const wrapper = shallow(<Home {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
