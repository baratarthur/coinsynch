import '@testing-library/jest-dom/extend-expect';

import { render, fireEvent } from '@testing-library/react';
import { Button } from '.';

describe('Common button', () => {

  test('renders correctly', () => {
    const { getByTestId } = render(<Button />);
    const button = getByTestId('common-button');
    expect(button).toBeInTheDocument();
  });

  test('should call callback function on click', () => {
    const handleClick = jest.fn();

    const { getByTestId } = render(<Button click={handleClick}/>);
    const button = getByTestId('common-button');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalled();
  });

  test('should display props label', () => {
    const { getByText } = render(<Button label="test"/>);
    const buttonLabel = getByText('test')

    expect(buttonLabel).toBeInTheDocument();
  });

});