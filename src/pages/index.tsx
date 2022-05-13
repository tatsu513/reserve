import type { NextPage } from 'next';
import useUserListPage from 'hooks/fetch/useUserListPage';

const Home: NextPage = () => {
  const { data, error } = useUserListPage();
  if (error) return <p>Error: {JSON.stringify(error)}</p>;
  return (
    <ul>
      <li>大川</li>
    </ul>
  );
};

export default Home;
