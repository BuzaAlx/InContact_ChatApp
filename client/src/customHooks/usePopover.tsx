import React, { useState, MouseEvent, ReactNode } from "react";
import { Popover } from "@material-ui/core";

export function usePopover() {
  const [anchorEl, setAnchorEl] = useState<any | null>(null);
  const handleClick = (event: MouseEvent) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const PopoverMarkup: React.FC = ({ children }) => {
    return (
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        {children}
      </Popover>
    );
  };

  return [
    PopoverMarkup,
    anchorEl,
    setAnchorEl,
    handleClick,
    handleClose,
    open,
    id,
  ];
}

export default usePopover;
