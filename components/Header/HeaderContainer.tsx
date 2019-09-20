import React from "react";
import { useRouter } from "next/router";
import { useApolloClient, useMutation } from "@apollo/react-hooks";
import HeaderPresenter from "./HeaderPresenter";
import { GET_NIGHTMODE, TOGGLE_NIGHTMODE } from "../../queries/index";

const HeaderContainer: React.FC = () => {
  const router = useRouter();
  const client = useApolloClient();
  const { nightmode } = client.cache.readQuery({ query: GET_NIGHTMODE });
  const [toggleNightmode] = useMutation(TOGGLE_NIGHTMODE, {
    variables: { mode: nightmode },
    update(cache) {
      cache.writeData({ data: { nightmode: !nightmode } });
    }
  });

  const toggle = () => {
    toggleNightmode(nightmode);
  };
  return (
    <>
      <HeaderPresenter path={router.asPath} nightmode={nightmode} />
    </>
  );
};
export default HeaderContainer;
