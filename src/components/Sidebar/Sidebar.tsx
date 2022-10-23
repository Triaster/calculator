import Button from "@mui/material/Button";
import CloseIcon from '@mui/icons-material/Close';
import type { RootState } from "../../app/store";
import { useSelector, useDispatch } from "react-redux";
import { toggle as sidebarActive } from "../../store/features/sidebarSlice";
import { Spring } from 'react-spring';
import { useRef } from 'react';
import BugReportIcon from '@mui/icons-material/BugReport';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';
import { useState } from "react";
import { open as formOpen } from "../../store/features/formSlice";
import FormDialog from "../Form/Form";


export default function Sidebar() {

  const dispatch = useDispatch();

  const toggle = useSelector((state: RootState) => state.sidebar.value);

  const myRef = useRef(null);

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;



  const style = {
    height: "100%",
    width: "28%",
    position: "absolute",
    zIndex: "9",
    color: "black",
    background: "rgba( 255, 255, 255, 0.2 )",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 12.5px )",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: 'column'
  }

  return (
    <Spring reset={true} from={{ opacity: "0", left: "-2000px" }} to={{ opacity: "1", left: "0" }} reverse={!toggle} >
      {(props: any) => (
        <div style={props} ref={myRef}>
          <div style={style} >
            <span>Sidebar</span>
            <div>
              <span>Bug report</span>
              <Button onClick={() => dispatch(formOpen())} >
                <BugReportIcon />
              </Button>
            </div>
            <div style={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "space-between" }} >
              <div>
                <Button aria-describedby={id} variant="contained" onClick={handleClick}>
                  <InfoIcon />
                </Button>
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                >
                  <Typography sx={{ p: 2 }}>Made by a Triaster.</Typography>
                </Popover>
              </div>

              <Button onClick={() => dispatch(sidebarActive())} style={{
                maxHeight: "48px",
                maxWidth: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                alignSelf: "self-end"
              }} >
                <CloseIcon />
              </Button>
            </div>
          </div>
          <FormDialog/>
        </div>
      )}
    </Spring>
  )
}