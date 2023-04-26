import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/react';
import { CopyrightFooter } from '.';

describe('Copyright footer', () => {

  it('renders correctly', () => {
    const { getByTestId } = render(<CopyrightFooter />);
    const footer = getByTestId('copy-footer');
    expect(footer).toBeInTheDocument();
  });

  it('it has copyright info', () => {
    const { getByText } = render(<CopyrightFooter />);
    const text = getByText('Copyright © 2022 - All rights reserved');
    expect(text).toBeInTheDocument();
  });

});