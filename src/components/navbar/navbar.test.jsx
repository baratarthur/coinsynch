import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/react';
import { Nav } from '.';

describe('Navbar', () => {

  it('should renders correctly', () => {
    const { getByTestId } = render(<Nav />);
    const footer = getByTestId('navbar');
    expect(footer).toBeInTheDocument();
  });

});