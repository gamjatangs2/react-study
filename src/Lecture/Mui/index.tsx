import React from 'react'
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

//# MUI
// Material User Interface

//# MUI styled Method
//


export default function index() {
  return (
    <>
    {/* variant: (버튼의)형태 */}
      <Button variant="text" fullWidth size='small'>Text</Button>
      <Button variant="contained" disabled={true} size='large'>Contained</Button>
      <Button variant="outlined" disabled={false}>Outlined</Button>
      {/* fullWidth
      button 컴포넌트를 block형태로 지정 - 가로 사이즈를 100%로 지정 */}
      {/* disalbled
      해당 기능을 사용하지 못하도록 막아주는 Props */}
      {/* size
      small, medium, large */}
      {/* mui icons
      npm install @mui/icons-material
      
      import { iconsButton } from '@mui/material';
      import IconsButton from '@mui/icons-material';
      <IconsButton>
        <사용하고자 하는 버튼의 태그 삽입 />
      <IconsButton>
      */}
      return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box>
    {/* npm i --force */ }
  );
    </>
  );
}
