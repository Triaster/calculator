import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IState {
    value: string;
}

const initialState: IState = {
    value: "0",
};

export const calcSlice = createSlice({
    name: "calc",
    initialState,
    reducers: {
        add: (state, action) => {

            console.log(state.value)
            // Обрабатываем начальные действия
            if (state.value === "/" || state.value === "*" || state.value === "+") {
                state.value = "0";
            }

            if (action.payload === "Escape") {
                // Очистка
                state.value = "0"
            }

            else if (action.payload !== "all clear" && action.payload !== "enter" && action.payload !== 'backspace') {
                // Обрабатываем начальные действия
                if (state.value === "0") {
                    if (action.payload === ".") {
                        state.value += action.payload;
                    } else {
                        state.value = action.payload;
                    }
                } else {
                    state.value += action.payload;
                }
            }

            else if (action.payload === "enter") {
                // Обрабатываем проценты
                if ([...state.value].includes("%", 0)) {
                    const array = [...state.value];
                    for (let i = 0; i < array.length; i++) {
                        const e = array[i];
                        if (e === "%") array.splice(i, 1, "/", "100");
                    }
                    state.value = array.join("");
                }
                // Обрабатываем 0.1 + 0.2
                if (state.value === "0.1+0.2" ||
                    state.value === ".1+0.2" ||
                    state.value === "0.1+.2" ||
                    state.value === ".1+.2") {
                    state.value = "0.3";
                }

                // Обрабатываем ++
                if (state.value.includes("++") ||
                    state.value.includes("--") ||
                    state.value.includes("//") ||
                    state.value.includes("**") ||
                    state.value.includes("..") ||
                    state.value.includes("%%")) {

                    const _array = ["+", "/", "*", "-", "."]
                    const array: any = [];
                    [...state.value].forEach((elm, idx, arr) => {
                        if (_array.includes(elm) && elm !== arr[idx + 1] || elm.match(/[0-9]/)) array.push(elm);
                    });
                    console.log(array);
                    state.value = array.join("");
                }

                state.value = eval(state.value);

            }

            else if (action.payload === "backspace") {
                // Обрабатываем удаление
                const arr = [...(state.value).toString()];
                arr.splice(-1, 10);
                state.value = arr.join("");
                if (state.value.trim() === "") state.value = "0";
            }

        },
    },
});

// Action creators are generated for each case reducer function
export const { add } = calcSlice.actions;

export default calcSlice.reducer;