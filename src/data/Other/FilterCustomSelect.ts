import { GroupBase, StylesConfig } from "react-select";
import { CustomSelectStyles } from "../../types/interfaces";

export const customSelectStyles: StylesConfig<any, false, GroupBase<any>> & CustomSelectStyles = {
    control: (base, state) => ({
        ...base,
        paddingTop: "20px",
        paddingBottom: "20px",
        paddingLeft: "25px",
        paddingRight: "25px",
        borderRadius: "7px",
        fontWeight: "500",
        color: state.selectProps.menuIsOpen ? "#7a0000" : "#fff",
        borderColor: "#7a0000",
        boxShadow: state.selectProps.menuIsOpen ? "0 0 5px rgba(122, 0, 0, 0.5)" : "none",
        backgroundColor: state.selectProps.menuIsOpen ? "transparent" : "#7a0000",
        '&:hover': {
            boxShadow: "0 0 5px rgba(122, 0, 0, 1)",
        },
    }),
    singleValue: (base, state) => ({
        ...base,
        color: state.selectProps.menuIsOpen ? "#7a0000" : "#fff",
        whiteSpace: 'nowrap',
        overflow: 'visible',
        textOverflow: 'clip',
    }),
    placeholder: (base, state) => ({
        ...base,
        color: state.selectProps.menuIsOpen ? "#7a0000" : "#fff",
    }),
    dropdownIndicator: (base, state) => ({
        ...base,
        color: state.selectProps.menuIsOpen ? "#7a0000" : "#fff",
        '&:hover': {
            color: state.selectProps.menuIsOpen ? "#7a0000" : "#fff",
        },
    }),
    option: (base, state) => ({
        ...base,
        zIndex: 6,
        color: state.isSelected ? "#fff" : "#000",
        backgroundColor: state.isSelected ? "rgba(122, 0, 0, 0.8)" : "transparent",
        '&:hover': {
            backgroundColor: state.isSelected ? "rgba(122, 0, 0, 0.8)" : "rgba(122, 0, 0, 0.5)",
            color: "#fff",
        },
    }),
    menu: (base) => ({
        ...base,
        zIndex: 6,
        '@media (max-width: 420px)': {
            position: 'relative',
        },
    }),
};
