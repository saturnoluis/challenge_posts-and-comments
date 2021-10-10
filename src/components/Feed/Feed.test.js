import { render } from '@testing-library/react';
import Feed from '.';

describe('<Feed />', () => {
  it('renders a list element with test-id "Feed"', () => {
    const component = render(<Feed />);

    component.getByRole('list');
    component.getByTestId('Feed');
  });

  it('renders a list item per given posts', () => {
    const testPosts = [
      { id: 1 }, 
      { id: 2 }, 
      { id: 3 },
    ];

    const component = render(<Feed posts={testPosts} />)
    const listItems = component.getAllByRole('listitem');

    expect(listItems).toHaveLength(testPosts.length);
  });

  it('renders a PostCard per given post', () => {
    const testPosts = [
      { id: 1 }, 
      { id: 2 }, 
      { id: 3 },
    ];

    const component = render(<Feed posts={testPosts} />)
    const postCards = component.getAllByTestId('PostCard');

    expect(postCards).toHaveLength(testPosts.length);
  });

  it('sets title and body to each post', () => {
    const testPosts = [
      { id: 1, title: 'Test title', body: 'Test body' },
    ];

    const component = render(<Feed posts={testPosts} />)

    component.getByText('Test title');
    component.getByText('Test body');
  });
});