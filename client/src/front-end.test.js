import { configure, mount, shallow, render } from "enzyme";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import toJson from "enzyme-to-json";
import renderer from "react-test-renderer";

global.shallow = shallow;
global.render = render;
global.mount = mount;

// Components to be tested
import ReviewCount from "./components/Reviewcount.jsx";
import SearchReviews from "./components/SearchReviews.jsx";
import Pagination from "./components/Pagination.jsx";
import ReviewEntry from "./components/ReviewEntry.jsx";
import ConditionsRatings from "./components/ConditionsRatings.jsx";
import DropdownSearch from "./components/DropdownSearch.jsx";
import ConditionsRow from "./components/ConditionsRow.jsx";

//  good for debugging -
// console.log(component.debug())
describe("tests ReviewCount Component", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<ReviewCount debug />);

    expect(toJson(component)).toMatchSnapshot();
  });

  // reviewLength={this.state.reviews.length}
  //           average={ratings["totalAverage"]}
});

/////////  testing with MOUNT //////////////////////
// always call unmount() after to not affect other tests
////////////////////////////////////////////////////
/////////// wanting to test interacting with a child component then the mount method can be used.
describe("tests SearchReviews Component", () => {
  it("should render correctly", () => {
    const component = shallow(<SearchReviews />);

    expect(toJson(component)).toMatchSnapshot();
  });

  it("should be possible to generate search critera with enter", () => {
    const component = mount(<SearchReviews />);
    component.find(".form-control").simulate("keydown", { keyCode: 13 });

    expect(component).toMatchSnapshot();
    component.unmount();
  });

  it("should preventDefault when user presses enter on searching for reviews", () => {
    const value = "2";
    const onChange = jest.fn();
    const wrapper = shallow(<SearchReviews handleSearchInput={onChange} />);

    expect(wrapper).toMatchSnapshot();

    wrapper.find(".form-control").simulate("keydown", {
      keyCode: 13,
      preventDefault: () => {}
    });

    expect(wrapper).toMatchSnapshot();
  });
});
/////////// test fn calls
describe("tests Pagination Component", () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const mockFunction = jest.fn();

  // it("should render correctly", () => {
  //   // const component = renderer.create(
  //   //   <Pagination items={array} onChangePage={mockFunction} />
  //   // );
  //   // const component = mount(
  //   //   <Pagination items={array} onChangePage={mockFunction} />
  //   // );

  //   // expect(toJson(component)).toMatchSnapshot();
  //   // component.unmount();
  //   const tree = renderer
  //     .create(<Pagination items={array} onChangePage={mockFunction} />)
  //     .toJSON();
  //   expect(tree).toMatchSnapshot();
  // });

  it("should call mockFunction on button click", () => {
    // const component = mount(<Pagination />);
    // expect(component.contains(<Pagination />)).toBe(true);

    const component = mount(
      <Pagination items={array} onChangePage={mockFunction} />
    );
    component.find("ul.pagination").simulate("click");
    expect(mockFunction).toHaveBeenCalled();

    component.unmount();
  });
});

/////////// test state updates
describe("tests ReviewEntry Component", () => {
  const review = {
    image_url: "image",
    username: "dawn",
    description:
      "Sodales mus cras fermentum hendrerit lorem. Sagittis hendrerit cubilia tincidunt nibh tortor posuere parturient quam consequat. Habitasse nec id massa nec tincidunt platea. Felis aliquam sed eget amet tortor quam. Condimentum ad. Ac condimentum, varius torquent posuere placerat faucibus fames etiam massa blandit platea ad eget venenatis nulla curabitur lectus turpis sociosqu imperdiet iaculis porttitor vitae tristique est parturient bibendum molestie non aenean semper montes ridiculus per. Mus. Dui leo ante nascetur aliquam urna quam, dignissim sit torquent ante. Facilisis. Metus. Pellentesque vel maecenas amet donec fringilla mus senectus. Curabitur suspendisse elit consectetuer placerat auctor etiam mattis sociosqu. Ridiculus ullamcorper felis sed hymenaeos Vitae, curabitur nunc metus platea aenean id ut vestibulum senectus. Feugiat hymenaeos nullam hymenaeos netus volutpat class aptent senectus est fusce urna torquent rutrum. Vel suspendisse."
  };
  const review_id = 1;

  it("should render correctly", () => {
    const component = shallow(<ReviewEntry key={review_id} review={review} />);

    expect(toJson(component)).toMatchSnapshot();
  });

  it("sets loading state to true when clicking Read More button", () => {
    const component = mount(<ReviewEntry key={review_id} review={review} />);
    component.find("button").simulate("click");
    expect(component.state("expanded")).toEqual(true);
    component.unmount();
  });

  it("renders an image", () => {
    const wrapper = shallow(<ReviewEntry review={review} />);
    // const wrapper = component.find("img");
    expect(wrapper.prop("image_url")).toMatchSnapshot();
  });
});
//////////////////////////////////////////

// testing with RENDER
// renders to static html
// less costly than mount but less functionality

///////// testing with SHALLOW  //////////////////////
// renders only single component (not even its children)
// This is as with shallow(<MyComponent />), you're testing what MyComponent renders -
// not the element you passed into shallow
//////////////////////////////////////////
/////////// simple, non-interactive components
describe("tests ConditionsRatings Component", () => {
  const ratings = {
    accuracy: 1,
    communication: 1,
    cleanliness: 1,
    location: 1,
    check_in: 1,
    value: 1
  };

  ///////////// testing jsx
  test("accepts custom properties", () => {
    const wrapper = shallow(
      <ConditionsRatings ratings={ratings} flexBasis={0} flexGrow={1} />
    );
    expect(wrapper.prop("style")).toMatchSnapshot();
  });

  it("should render correctly", () => {
    const component = shallow(<ConditionsRatings ratings={ratings} />);

    expect(component).toMatchSnapshot();
  });
});

describe("tests DropdownSearch component", () => {
  const clickFn = jest.fn();

  it("should render correctly", () => {
    const component = shallow(<DropdownSearch handleValueChange={clickFn} />);

    expect(toJson(component)).toMatchSnapshot();
  });

  it("selecting a dropdown option should trigger the props function", () => {
    const component = shallow(<DropdownSearch handleValueChange={clickFn} />);
    component.find("#dropdown-basic-button").simulate("change");
    expect(clickFn).toHaveBeenCalled();
  });
});

/////////// testing props
// test("should render title prop", () => {
//   const wrapper = shallow(<ConditionsRow title={"Title!"} rating={1} />);
//   expect(wrapper.prop("title")).toEqual("Title!");
// });
