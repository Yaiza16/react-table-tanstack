import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import React, { forwardRef } from 'react';
import { Box, Center, Icon } from '@chakra-ui/react';
import CalendarIcon from './icons/CalendarIcon';

// * In order to render customInput propertly, we need to wrap the component in forwardRef
const DateCustomInput = forwardRef(({ value, onClick, clearData }, ref) => (
  <Center ref={ref} onClick={onClick} cursor='pointer'>
    {value ? (
      <>
        {value}
        <Box
          pos='absolute'
          right={3}
          fontSize='md'
          color='red.300'
          onClick={(e) => {
            e.stopPropagation();
            clearData();
          }}
        >
          &times;
        </Box>
      </>
    ) : (
      <Icon as={CalendarIcon} fontSize='xl' />
    )}
  </Center>
));

export const DateCell = ({ getValue, row, column, table }) => {
  const date = getValue();
  const { updateData } = table.options.meta;

  return (
    <DatePicker
      wrapperClassName='date-wrapper'
      dateFormat='MMM d'
      selected={date}
      onChange={(date) => updateData(row.index, column.id, date)}
      customInput={<DateCustomInput clearData={() => updateData(row.index, column.id, null)} />}
    />
  );
};
