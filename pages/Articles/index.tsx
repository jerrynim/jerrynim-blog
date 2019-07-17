import Articles from "../../components/Articles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import React from "react";
import { useQuery } from "react-apollo-hooks";
import { GET_QUERIES } from "../../queries";

const App: React.FC = () => {
  const { data, loading, error } = useQuery(GET_QUERIES);
  console.log(data, loading, error);
  return (
    <>
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
