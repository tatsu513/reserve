import request, { RequestDocument } from 'graphql-request';
import useSWR from 'swr';
import { Users, UsersDocument } from '../../../generated/graphql';

const fetcher = (query: RequestDocument) =>
  request(process.env.NEXT_PUBLIC_BACKEND_URL as string, query);

const useUserPage = () => {
  const { data, error } = useSWR<Users>(UsersDocument, fetcher);
  return {
    data: data ?? null,
    error: error,
  };
};

export default useUserPage;
