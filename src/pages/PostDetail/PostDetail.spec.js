import { render } from '@testing-library/react';
import PostDetail from '.';

describe('<PostDetail />', () => {
  it('renders in the main wrapper "PostDetail"', () => {
    const component = render(<PostDetail />);

    component.getByRole('main');
    component.getByTestId('PostDetail');
  });
});