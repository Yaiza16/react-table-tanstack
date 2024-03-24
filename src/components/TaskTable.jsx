import { Box } from '@chakra-ui/react';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import DATA from '../data';
import { useState } from 'react';
import { EditableCell } from './EditableCell';
import { StatusCell } from './StatusCell';
import { DateCell } from './DateCell';

const columns = [
  {
    accessorKey: 'task',
    Header: 'Task',
    size: 225,
    cell: EditableCell,
  },
  {
    accessorKey: 'status',
    Header: 'Status',
    cell: StatusCell,
  },
  {
    accessorKey: 'due',
    Header: 'Due',
    cell: DateCell,
  },
  {
    accessorKey: 'notes',
    Header: 'Notes',
    size: 225,
    cell: EditableCell,
  },
];

const TaskTable = () => {
  const [data, setData] = useState(DATA);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    columnResizeMode: 'onChange',
    // * The meta object is passed to the cell renderer. It contains the updateData function that can be used to update the data.
    meta: {
      updateData: (rowIndex, columnId, value) =>
        setData((prevData) => prevData.map((row, index) => (index === rowIndex ? { ...row, [columnId]: value } : row))),
    },
  });

  console.log(table.getHeaderGroups());
  console.log(table.getRowModel().rows);
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
