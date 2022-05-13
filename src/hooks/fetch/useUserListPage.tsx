import request, { RequestDocument } from 'graphql-request';
import useSWR from 'swr';
import { User, UserListPageDocument } from '../../graphql/generated/graphql';

const fetcher = (query: RequestDocument) =>
  request(process.env.NEXT_PUBLIC_BACKEND_URL as string, query);

const useUserListPage = () => {
  const { data, error } = useSWR<User[]>(UserListPageDocument, fetcher);
  return {
    data: data ?? null,
    error: error,
  };
};

export default useUserListPage;
