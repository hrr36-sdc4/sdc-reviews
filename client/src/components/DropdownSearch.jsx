import React from 'react';
import Col from 'react-bootstrap/Col';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

class DropDownSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: 'Most recent' };
    this.change = this.change.bind(this);
  }

  change(e) {
    // const handleValueChange = this.props;
    this.props.handleValueChange(e);
    e === 'recent'
      ? this.setState({ value: 'Most recent' })
      : this.setState({ value: 'Most relevant' });
  }

  render() {
    const { value } = this.state;
    return (
      <Col className='dropdown-column' xs sm md lg='3'>
        <DropdownButton
          variant='light'
          id='dropdown-basic-button'
          title={value}
          onSelect={this.change}
        >
          <Dropdown.Item eventKey='recent'>Most recent</Dropdown.Item>
          <Dropdown.Item eventKey='relevant'>Most relevant</Dropdown.Item>
        </DropdownButton>
      </Col>
    );
  }
}

export default DropDownSearch;
