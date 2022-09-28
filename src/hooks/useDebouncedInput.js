import { useState } from 'react'
import { useDebounce } from 'react-use'

function useDebouncedInput(inValue = '', {wait  = 500} = {}){
  const [value, setValue] = useState(inValue);
  const [debouncedValue, setDebouncedValue] = useState('');

  const [, cancel] = useDebounce(() => setDebouncedValue(value), wait, [value]);

  return [debouncedValue, setValue, {value, onChange: e => setValue(e.target.value)}]
}

export default useDebouncedInput