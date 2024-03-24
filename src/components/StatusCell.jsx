import { Box, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React from 'react';
import { STATUSES } from '../data';
const ColorIcon = ({ color, ...props }) => <Box w='12px' h='12px' bg={color} borderRadius='3px' {...props} />;
export const StatusCell = ({ getValue, row, column, table }) => {
  const { color, name } = getValue() || {};
  const { updateData } = table.options.meta;

  return (
    <Menu isLazy offset={[0, 0]} flip={false} autoSelect={false}>
      <MenuButton h='100%' w='100%' textAlign='left' p={1.5} bg={color || 'transparent'} color='gray.900'>
        {name}
      </MenuButton>
      <MenuList>
        {STATUSES.map((status) => (
          <MenuItem key={status.id} onClick={() => updateData(row.index, column.id, status)}>
            <ColorIcon color={status.color} mr={3} />
            {status.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
