import request, { RequestDocument } from 'graphql-request';
import useSWR from 'swr';

type User = {
  id: string;
  name: string;
};

type Users = {
  posts: User[];
};

const fetcher = (query: RequestDocument) =>
  request(process.env.NEXT_PUBLIC_BACKEND_URL as string, query);
const USERS_QUERY = `
  query {
    users {
      id
      name
    }
  }
`;

const useUserPage = () => {
  const { data, error } = useSWR<Users>(USERS_QUERY, fetcher);
  return { data, error };
};

export default useUserPage;
