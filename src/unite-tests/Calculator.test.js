import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

it('Navbar component is working', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
