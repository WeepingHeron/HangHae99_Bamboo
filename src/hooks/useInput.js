import { useState } from 'react';

const useInput = defaultValue => {
  const [value, setValue] = useState(defaultValue);

  const handler = event => {
    setValue(event.target.value);
  };

  return [value, handler];
};

export default useInput;
