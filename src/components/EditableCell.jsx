import { Input } from '@chakra-ui/react';
import React, { useState } from 'react';

export const EditableCell = ({ getValue }) => {
  const [value, setValue] = useState(getValue());
  return (
    <Input
      variant='filled'
      value={value}
      onChange={(e) => setValue(e.target.value)}
      size='sm'
      w='85%'
      overflow='hidden'
      textOverflow='ellipsis'
      whiteSpace='nowrap'
    />
  );
};
