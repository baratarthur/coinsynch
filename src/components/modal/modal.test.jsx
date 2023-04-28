import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/react';
import { Modal } from '.';

describe('Modal Component', () => {

    it('should reders correctly', () => {
        const { getByTestId } = render(<Modal />)
        const modal = getByTestId('modal')

        expect(modal).toBeInTheDocument()
    })
})
