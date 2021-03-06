import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { siteTheme } from '../../utils/siteData';

import PageFooter from './PageFooter';


/* eslint-disable no-undef */
it('renders correctly', () => {
  const tree = renderer.create(
    <ThemeProvider theme={siteTheme}>
      <PageFooter />
    </ThemeProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
