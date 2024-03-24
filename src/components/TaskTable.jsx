import { Box } from '@chakra-ui/react';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import DATA from '../data';
import { useState } from 'react';

const columns = [
  {
    accessorKey: 'task',
    Header: 'Task',
    size: 225,
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: 'status',
    Header: 'Status',
    cell: (props) => <p>{props.getValue()?.name}</p>,
  },
  {
    accessorKey: 'due',
    Header: 'Due',
    cell: (props) => <p>{props.getValue()?.toLocaleTimeString()}</p>,
  },
  {
    accessorKey: 'notes',
    Header: 'Notes',
    cell: (props) => <p>{props.getValue()}</p>,
  },
];

const TaskTable = () => {
  const [data, setData] = useState(DATA);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    columnResizeMode: 'onChange',
  });

  console.log(table.getHeaderGroups());
  return (
    <Box className='table' w={table.getTotalSize()}>
      {table.getHeaderGroups().map((headerGroup) => (
        <Box className='tr' key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <Box className='th' w={header.getSize()} key={header.id}>
              {header.column.columnDef.Header}
              <Box
                onMouseDown={header.getResizeHandler()}
                onTouchStart={header.getResizeHandler()}
                className={`resizer ${header.column.getIsResizing() ? 'isResizing' : ''}`}
              />
            </Box>
          ))}
        </Box>
      ))}
      {table.getRowModel().rows.map((row) => (
        <Box className='tr' key={row.id}>
          {row.getVisibleCells().map((cell) => (
            <Box className='td' w={cell.column.getSize} key={cell.id}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
};
export default TaskTable;
