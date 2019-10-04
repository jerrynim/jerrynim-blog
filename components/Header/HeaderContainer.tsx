import React, { useState } from "react";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/react-hooks";
import HeaderPresenter from "./HeaderPresenter";
import { GET_NIGHTMODE, TOGGLE_NIGHTMODE } from "../../queries/index";

const HeaderContainer: React.FC = () => {
  const router = useRouter();
  const { data } = useQuery<{ nightmode: boolean }>(GET_NIGHTMODE, {
    ssr: false,
    fetchPolicy: "cache-only"
  });
  const [toggleNightmode] = useMutation(TOGGLE_NIGHTMODE, {
    variables: { mode: data.nightmode },
    update(cache) {
      cache.writeData({ data: { nightmode: !data.nightmode } });
    }
  });
  const [popupStatus, setPopupStatus] = useState(false);
  return (
    <>
      <HeaderPresenter
        path={router.asPath}
        nightmode={data.nightmode}
        toggleNightmode={toggleNightmode}
        popupStatus={popupStatus}
        setPopupStatus={setPopupStatus}
      />
    </>
  );
};
export default HeaderContainer;
