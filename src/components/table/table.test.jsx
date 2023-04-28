import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/react';
import { TopCoinsTable } from '.';

describe('Table Component', () => {

    it('should reders correctly', () => {
        const { getByTestId } = render(<TopCoinsTable />)
        const coinsTable = getByTestId('top-coins-table')

        expect(coinsTable).toBeInTheDocument()
    })
})
