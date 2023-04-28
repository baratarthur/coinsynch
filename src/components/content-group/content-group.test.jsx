import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/react';
import { ContentGroup } from '.';

describe('Content group Component', () => {

    it('should reders correctly', () => {
        const { getByTestId } = render(<ContentGroup />)
        const contentGroup = getByTestId('content-group')

        expect(contentGroup).toBeInTheDocument()
    })
})
