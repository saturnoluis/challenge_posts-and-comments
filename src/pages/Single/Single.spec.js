import { render } from '@testing-library/react';
import Single from '.';

describe('<Single />', () => {
  it('renders in the main wrapper "Single"', () => {
    const component = render(<Single />);

    component.getByRole('main');
    component.getByTestId('Single');
  });
});