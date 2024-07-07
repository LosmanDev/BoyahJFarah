import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function WordPress() {
  const { data, error } = useSWR(
    'https://public-api.wordpress.com/wp/v2/sites/boyahblog.wordpress.com/posts',
    fetcher,
  );
}
