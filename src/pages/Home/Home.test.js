import { render } from '@testing-library/react';
import Home from '.';

describe('<Home />', () => {
  it('renders in the main wrapper "Home"', () => {
    const component = render(<Home />);

    component.getByRole('main');
    component.getByTestId('Home');
  });

  it('renders one Feed component', () => {
    const component = render(<Home />);

    const Feed = component.getAllByTestId('Feed');

    expect(Feed.length).toBe(1);
  });
});