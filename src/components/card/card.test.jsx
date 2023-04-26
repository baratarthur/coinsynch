import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/react';
import { Card } from '.';

describe('Card Component', () => {

    it('should reders correctly', () => {
        const { getByTestId } = render(<Card />)
        const card = getByTestId('card')

        expect(card).toBeInTheDocument()
    })
})
