import FullArticle from "../../components/FullArticle";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";
import { useQuery } from "react-apollo-hooks";
import { GET_POST } from "../../queries";
import Loader from "../../components/Loader";

const App: React.FC = () => {
  const router = useRouter();
  const { article } = router.query;
  console.log(article);
  const { data, loading } = useQuery(GET_POST, {
    variables: { title: "title1" }
  });
  console.log(data);
  return (
    <>
      {loading && <Loader />}
      {!loading && data && data.getPost && (
        <>
          <Header />
          <FullArticle data={data} />
          <Footer />
        </>
      )}
    </>
  );
};
export default App;
