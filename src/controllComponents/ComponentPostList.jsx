import { myFetchData } from "../tools";

const dataFromServer = myFetchData(
  "https://jsonplaceholder.typicode.com/posts"
);

const ComponentPostList = () => {
  const postList = dataFromServer.read();

  return (
    <ul>
      {postList.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};
export default ComponentPostList;
