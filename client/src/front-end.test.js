import { configure, mount, shallow, render } from "enzyme";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import toJson from "enzyme-to-json";

global.shallow = shallow;
global.render = render;
global.mount = mount;

// Components to be tested
import ReviewCount from "./components/Reviewcount.jsx";
import SearchReviews from "./components/SearchReviews.jsx";
import Pagination from "./components/Pagination.jsx";
import ReviewEntry from "./components/ReviewEntry.jsx";
import App from "./index.jsx";

//  good for debugging -
// console.log(component.debug())
// import App from "./index.jsx";
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
  it("should be possible to generate search critera with enter", () => {
    const component = mount(<SearchReviews />);
    component.find(".form-control").simulate("keydown", { keyCode: 13 });

    expect(component).toMatchSnapshot();
    component.unmount();
  });
});
/////////// test fn calls
describe("tests Pagination Component", () => {
  const mockFunction = jest.fn();

  it("should call mockFunction on button click", () => {
    // const component = mount(<Pagination />);
    // expect(component.contains(<Pagination />)).toBe(true);

    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    const component = mount(
      <Pagination items={array} onChangePage={mockFunction} />
    );
    component.find("ul.pagination").simulate("click");
    expect(mockFunction).toHaveBeenCalled();

    component.unmount();
  });
});
// [className="save-button"]
/////////// test state updates
describe("tests ReviewEntry Component", () => {
  const review = {
    image_url: "image",
    username: "dawn",
    description:
      "Sodales mus cras fermentum hendrerit lorem. Sagittis hendrerit cubilia tincidunt nibh tortor posuere parturient quam consequat. Habitasse nec id massa nec tincidunt platea. Felis aliquam sed eget amet tortor quam. Condimentum ad. Ac condimentum, varius torquent posuere placerat faucibus fames etiam massa blandit platea ad eget venenatis nulla curabitur lectus turpis sociosqu imperdiet iaculis porttitor vitae tristique est parturient bibendum molestie non aenean semper montes ridiculus per. Mus. Dui leo ante nascetur aliquam urna quam, dignissim sit torquent ante. Facilisis. Metus. Pellentesque vel maecenas amet donec fringilla mus senectus. Curabitur suspendisse elit consectetuer placerat auctor etiam mattis sociosqu. Ridiculus ullamcorper felis sed hymenaeos Vitae, curabitur nunc metus platea aenean id ut vestibulum senectus. Feugiat hymenaeos nullam hymenaeos netus volutpat class aptent senectus est fusce urna torquent rutrum. Vel suspendisse."
  };
  const review_id = 1;

  it("sets loading state to true when clicking Read More button", () => {
    const component = mount(<ReviewEntry key={review_id} review={review} />);
    component.find("button").simulate("click");
    expect(component.state("expanded")).toEqual(true);
    component.unmount();
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
// it('should render correctly with no props', () => {
//     const component = shallow(<MyComponent/>);

//     expect(component).toMatchSnapshot();
//   });
//   it('should render banner text correctly with given strings', () => {
//     const strings = ['one', 'two'];
//     const component = shallow(<MyComponent list={strings} />);
//     expect(component).toMatchSnapshot();
//   });

/////////// check that a function passed as props is successfully called.

// const clickFn = jest.fn();
// describe('MyComponent', () => {
//   it('button click should hide component', () => {
//     const component = shallow(<MyComponent onClick={clickFn} />);
//     component
//       .find('button#my-button-two')
//       .simulate('click');
//     expect(clickFn).toHaveBeenCalled();
//   });
// });

/////////// basic test
// test('render a label', () => {
//     const wrapper = shallow(
//         <Label>Hello Jest!</Label>
//     );
//     expect(wrapper).toMatchSnapshot();
// });

/////////// testing event handlers
// test('pass a selected value to the onChange handler', () => {
//     const value = '2';
//     const onChange = jest.fn();
//     const wrapper = shallow(
//         <Select items={ITEMS} onChange={onChange} />
//     );

//     expect(wrapper).toMatchSnapshot();

//         wrapper.find('select').simulate('change', {
//         target: { value },
//     });

//     expect(onChange).toBeCalledWith(value);
// });

///////////// testing jsx
// test('accept custom properties', () => {
//     const wrapper = shallow(
//         <Layout
//             flexBasis={0}
//             flexGrow={1}
//             flexShrink={1}
//             flexWrap="wrap"
//             justifyContent="flex-end"
//             alignContent="center"
//             alignItems="center"
//         />
//     );
//     expect(wrapper.prop('style')).toMatchSnapshot();
// });

/////////// testing props
// test('render a document title', () => {
//     const wrapper = shallow(
//         <DocumentTitle title="Events" />
//     );
//     expect(wrapper.prop('title')).toEqual('Events');
// });

// test('render a document title and a parent title', () => {
//     const wrapper = shallow(
//         <DocumentTitle title="Events" parent="Event Radar" />
//     );
//     expect(wrapper.prop('title')).toEqual('Events — Event Radar');
// });
