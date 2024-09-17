import { useQuery, useMutation } from "@tanstack/react-query";
import { wait } from "@testing-library/user-event/dist/utils";

const Posts = [
  { id: 1, title: "post 1" },
  { id: 2, title: "post 2" },
];

function App() {
  const postQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () => wait(1000).then(() => [...Posts]),
  });

  if (postQuery.isLoading) return <h1>Loading.....</h1>;
  if (postQuery.isError) return <pre>{JSON.stringify(postQuery.error)}</pre>;
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default App;
