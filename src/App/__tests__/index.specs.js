import * as React from 'react';
//eslint-disable-next-line
import {render, fireEvent, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Component from '../';

describe('App', () => {
  test('can render ', () => {
    const {container, getByText} = render(<Component /> );

    expect(container).toBeInTheDocument();
    getByText('Start React App!');
  });
});