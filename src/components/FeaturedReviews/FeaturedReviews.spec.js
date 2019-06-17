import React from "react";
import { shallow } from "enzyme";
import FeaturedReviews from "./FeaturedReviews";

describe("FeaturedReviews", () => {
  it("renders", () => {
    const wrapper = shallow(<FeaturedReviews />);

    expect(wrapper).toMatchSnapshot();
  });
});
