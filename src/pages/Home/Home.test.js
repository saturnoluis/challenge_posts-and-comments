import { render } from '@testing-library/react';
import Home from '.';

describe('<Home />', () => {
  it('renders one main element', () => {
    const component = render(<Home />);

    const main = component.getAllByRole('main');

    expect(main.length).toBe(1);
  });

  it('renders one Feed component', () => {
    const component = render(<Home />);

    const Feed = component.getAllByTestId('Feed');

    expect(Feed.length).toBe(1);
  });
});