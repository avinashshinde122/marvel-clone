import { useQuery } from "react-query";
import { getComics } from "../api/comics";

const Comics = () => {
  const { isLoading, data } = useQuery("comics", getComics);
  console.log({ isLoading, data });

  return <div>Comics</div>;
};

export default Comics;
