import type { NextPage } from 'next';
import useUserPage from 'hooks/fetch/useUserPage';

const Home: NextPage = () => {
  const { data, error } = useUserPage();
  if (error) return <p>Error: {JSON.stringify(error)}</p>;
  console.log({ data });
  return (
    <ul>
      <li>大川</li>
    </ul>
  );
};

export default Home;
