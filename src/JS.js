import React, { useMemo } from 'react';
import { Box, Button } from '@mui/material';
import MaterialReactTable from 'material-react-table';
import { data } from './makeData';

const Example = () => {
  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      displayColumnDefOptions={{
        'mrt-row-actions': {
          size: 350, //set custom width
          muiTableHeadCellProps: {
            align: 'center', //change head cell props
          },
        },
        'mrt-row-numbers': {
          enableColumnOrdering: true, //turn on some features that are usually off
          enableResizing: true,
          muiTableHeadCellProps: {
            sx: {
              fontSize: '1.2rem',
            },
          },
        },
        'mrt-row-select': {
          enableColumnActions: true,
          enableHiding: true,
          size: 100,
        },
      }}
      enableColumnResizing
      enableColumnOrdering
      enableRowNumbers
      enableRowSelection
      enableRowActions
      renderRowActions={({ row }) => (
        <Box sx={{ display: 'flex', gap: '1rem' }}>
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <Button>Button 3</Button>
        </Box>
      )}
    />
  );
};

export default Example;
