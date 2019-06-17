import React from "react";
import { shallow } from "enzyme";
import Actions from "./Actions";

describe("Actions", () => {
  it("renders", () => {
    const props = {
      price: "price"
    };

    const wrapper = shallow(<Actions {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
