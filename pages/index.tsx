import Home from "../components/Home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";
import { useQuery } from "react-apollo-hooks";
import { GET_POSTS } from "../queries/index";
import Loader from "../components/Loader";

const App: React.FC = () => {
  const { data, loading } = useQuery(GET_POSTS);

  return (
    <>
      {loading && <Loader />}
      {!loading && data && data.getPosts && (
        <>
          <Header />
          <Home data={data} />
          <Footer />
        </>
      )}
    </>
  );
};
export default App;
