import { Input } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

export const EditableCell = ({ getValue, row, column, table }) => {
  const initialValue = getValue();
  const [value, setValue] = useState(getValue());

  const onBlur = () => {
    table.options.meta?.updateData(row.index, column.id, value);
  };
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);
  return (
    <Input
      variant='filled'
      value={value}
      onBlur={onBlur}
      onChange={(e) => setValue(e.target.value)}
      size='sm'
      w='85%'
      overflow='hidden'
      textOverflow='ellipsis'
      whiteSpace='nowrap'
    />
  );
};
