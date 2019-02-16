import { configure, mount, shallow, render } from "enzyme";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

importing;
global.shallow = shallow;
global.render = render;
global.mount = mount;

//  good for debugging -
// console.log(component.debug())

import MyComponent from "./index.jsx";
describe("MyComponent", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<MyComponent debug />);

    expect(component).toMatchSnapshot();
  });
});

/////////  testing with MOUNT //////////////////////
// always call unmount() after to not affect other tests
////////////////////////////////////////////////////
/////////// wanting to test interacting with a child component then the mount method can be used.
// it('should be possible to activate button with Spacebar', () => {
//   const component = mount(<MyComponent />);
//   component
//     .find('button#my-button-one')
//     .simulate('keydown', { keyCode: 32 });
//   expect(component).toMatchSnapshot();
//   component.unmount();
// });

/////////// test fn calls
// const mockFunction = jest.fn();
// it('should call mockFunction on button click', () => {
//   const component = mount(
//     <MyComponent onClickFunction={mockFunction} />
//   );
//   component.find('button#ok-btn').simulate('click');
//   expect(mockFunction).toHaveBeenCalled();

//   component.unmount();
// });

/////////// test state updates
// it('sets loading state to true on save press', () => {
//     const component = mount(<MyComponent />);
//     component.find('[className="save-button"]').simulate('click');
//     expect(component.state('isLoading')).toEqual(true);
//     component.unmount();
//   });
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
//////////////////////////////////////////
