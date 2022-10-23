import ModeNightIcon from "@mui/icons-material/ModeNight";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Button from "@mui/material/Button";
import type { RootState } from "../../app/store";
import { useSelector, useDispatch } from "react-redux";
import { calculatorMode, converterMode } from "../../store/features/menuSlice";
import React from "react";
import { toggle } from "../../store/features/sidebarSlice";
import { toggle as toggleModePage } from "../../store/features/modePage";

export default function Menu() {
  
  const dispatch = useDispatch();
  const menuMode = useSelector((state: RootState) => state.menu.value);
  const mode = useSelector((state: RootState) => state.mode.value);

  return (
    <div style={{ height: "calc((1vw + 1vh) * 4)" }}>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <li>
          <Button onClick={() => dispatch(toggle())} >
            <MenuOpenIcon />
          </Button>
        </li>
        <div style={{ display: "flex", columnGap: "6px" }}>
          <li>
            <Button
              onClick={() => dispatch(calculatorMode())}
              variant={menuMode === "calculator" ? "contained" : "outlined"}
            >
              Calculator
            </Button>
          </li>
          <li>
            <Button
              onClick={() => dispatch(converterMode())}
              variant={menuMode === "converter" ? "contained" : "outlined"}
            >
              Converter
            </Button>
          </li>
        </div>
        <li>
          <Button onClick={() => dispatch(toggleModePage())}>
            {mode === "dark" ? (
              <ModeNightIcon />
            ) : (
              <WbSunnyIcon />
            )}
          </Button>
        </li>
      </ul>
    </div>
  );
}