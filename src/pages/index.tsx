import useUserListPage from 'hooks/fetch/useUserListPage';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const { data, error } = useUserListPage();
  if (error) return <p>Error: {JSON.stringify(error)}</p>;
  console.log({ data });
  return (
    <ul>
      <li>大川</li>
    </ul>
  );
};

export default Home;
