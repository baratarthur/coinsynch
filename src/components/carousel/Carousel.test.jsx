import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/react';
import { Carousel } from '.';

describe('Carousel Component', () => {

    it('should reders correctly', () => {
        const { getByTestId } = render(<Carousel />)
        const carousel = getByTestId('carousel')

        expect(carousel).toBeInTheDocument()
    })
})
