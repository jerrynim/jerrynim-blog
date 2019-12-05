import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_NIGHTMODE, TOGGLE_NIGHTMODE } from "../queries";

export default () => {
  const { data } = useQuery<{ nightmode: boolean }>(GET_NIGHTMODE, {
    ssr: true,
    fetchPolicy: "cache-only"
  });
  const nightmode = data?.nightmode;

  const [toggleNightmode] = useMutation(TOGGLE_NIGHTMODE, {
    variables: { mode: nightmode },
    update(cache) {
      cache.writeData({ data: { nightmode: !nightmode } });
    }
  });

  return { nightmode, toggleNightmode };
};
