import { TextField } from "@mui/material";
import React from "react";
// import AccountCircle from "@mui/icons-material/AccountCircle";
import AccountCircle from "@mui/icons-material/AccountCircleOutlined";
import InputAdornment from "@mui/material/InputAdornment";
import PasswordEyeIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const InputFormReuseable = ({
  icon = true,
  endIcon = false,
  type,
  pic,
  placeholder,
  setShowPassword,
  showPassword,
}) => {
  return (
    <>
      {" "}
      <TextField
        type={type}
        style={{ width: "100%" }}
        placeholder={placeholder}
        InputProps={{
          startAdornment: icon && (
            <InputAdornment position="start">{pic}</InputAdornment>
          ),
          endAdornment: endIcon && (
            <InputAdornment position="start">
              {showPassword ? ( <PasswordEyeIcon onClick={() => setShowPassword(false)} /> ) : ( <VisibilityOffIcon onClick={() => setShowPassword(true)} /> )}
              
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};

export default InputFormReuseable;
