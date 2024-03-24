import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import SearchIcon from './icons/SearchIcon';

export const Filters = ({ columnFilters, setColumnFilters }) => {
  const taskName = columnFilters.find((filter) => filter.id === 'task')?.value || '';

  const onFilterChange = (id, value) =>
    setColumnFilters((prev) => prev.filter((filter) => filter.id !== id).concat({ id, value }));
  return (
    <Box>
      <InputGroup size='sm' maxW='12rem'>
        <InputLeftElement pointerEvents='none' children={<SearchIcon color='gray.300' />} />
        <Input type='text' variant='filled' placeholder='Task name' borderRadius={5} value={taskName} onChange={(e) =>onFilterChange('task', e.target.value)}/>
      </InputGroup>
    </Box>
  );
};
