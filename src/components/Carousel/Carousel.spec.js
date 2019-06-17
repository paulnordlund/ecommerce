import React from "react";
import { shallow } from "enzyme";
import Carousel from "./Carousel";

describe("Carousel", () => {
  it("renders", () => {
    const props = {
      title: "title",
    };

    const wrapper = shallow(<Carousel {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
