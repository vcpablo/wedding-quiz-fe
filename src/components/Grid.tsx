import { Box } from '@mantine/core'
import { PropsWithChildren } from 'react'

const Grid: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridTemplateRows: 'masonry',
      }}
    >
      {children}
    </Box>
  )
}

// .container {
//   display: grid;
//   grid-template-rows: 200px;
//   grid-auto-rows: 100px;
//   grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
//   gap: 10px;
// }

// .element {
//   border: 2px dashed coral;
//   background-color: lightseagreen;
// }

export default Grid
