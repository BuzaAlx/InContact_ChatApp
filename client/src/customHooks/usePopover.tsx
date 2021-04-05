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

  return [anchorEl, setAnchorEl, handleClick, handleClose, open, id];
}

export default usePopover;
