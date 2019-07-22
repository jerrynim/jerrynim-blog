import { useState, useCallback } from "react";

export default function useInput(defaultValue: string = "") {
  const [value, setValue] = useState(defaultValue);
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValue(e.target.value);
    },
    []
  );
  return { value, onChange };
}
export type UseInput = {
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};
