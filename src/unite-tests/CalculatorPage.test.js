import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CalculatorPage from '../components/pages/CalculatorPage';

it('CalculatorPage component is working', () => {
  const tree = renderer
    .create(
      <Router>
        <Switch>
          <Route path="/Math-Magicians" exact component={CalculatorPage} />
        </Switch>
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
