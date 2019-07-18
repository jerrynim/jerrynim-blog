import Articles from "../../components/Articles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import React from "react";
import { useQuery } from "react-apollo-hooks";
import { GET_POSTS } from "../../queries";
import Loader from "../../components/Loader";

const App: React.FC = () => {
  const { data, loading } = useQuery(GET_POSTS);
  return (
    <>
      {loading && <Loader />}
      {!loading && data && data.getPosts && (
        <>
          <Header />
          <Articles data={data} />
          <Footer />
        </>
      )}
    </>
  );
};
export default App;
