import Feed from "../../components/Feed";

const dummyPosts = [
  { id: 1, title: 'First title', body: 'First body' },
  { id: 2, title: 'Second title', body: 'Second body' },
];

export default function Home () {
  return (
    <main data-testid="Home" role="main">
      <Feed posts={dummyPosts} />
    </main>
  );
}