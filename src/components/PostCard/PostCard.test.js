import { render } from '@testing-library/react';
import PostCard from '.';

describe('<PostCard />', () => {
  it('renders a "PostCard" article', () => {
    const component = render(<PostCard id={1} />);

    component.getByRole('article');
    component.getByTestId('PostCard');
  });

  it('renders the title and body by props', () => {
    const component = render(
      <PostCard id={1} title="Test title" body="Test body" />
    );

    component.getByText('Test title');
    component.getByText('Test body');
  });
});