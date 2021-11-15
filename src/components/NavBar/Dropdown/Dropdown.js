import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import "./Dropdown.css";
import { ReactComponent as BellIcon } from "./icons/bell.svg";
import { ReactComponent as MessengerIcon } from "./icons/messenger.svg";
import { ReactComponent as CaretIcon } from "./icons/caret.svg";
import { ReactComponent as PlusIcon } from "./icons/plus.svg";
import { ReactComponent as CogIcon } from "./icons/cog.svg";
import { ReactComponent as ChevronIcon } from "./icons/chevron.svg";
import { ReactComponent as ArrowIcon } from "./icons/arrow.svg";
import { ReactComponent as BoltIcon } from "./icons/bolt.svg";
import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  dropdown: {
    position: "absolute",
    top: "60px",
    right: "0px",
    width: "100%",
    color: ({ mutedLight }) => mutedLight,
    backgroundColor: ({ primary }) => primary,
    textDecoration: "none",
    border: "none",
    overflow: "hidden",
    transition: "height 500ms ease",
  },
  navItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  iconButton: {
    backgroundColor: ({ secondary }) => secondary,
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    padding: "5px",
    margin: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "filter 300ms",
    "&:hover": {
      filter: "brightness(1.2)",
    },
    "& svg": {
      fill: ({ mutedLight }) => mutedLight,
      width: "20px",
      height: "20px",
    },
  },
  menuItem: {
    color: ({ mutedLight }) => mutedLight,
    height: "50px",
    display: "flex",
    alignItems: "center",
    transition: "background 500ms",
    textDecoration: "none",
    padding: "0.5rem",
    "& #icon-button": {
      marginRight: "0.5rem",
      "&:hover": {
        filter: "none",
      },
    },
    "&:hover": {
      backgroundColor: ({ accent }) => accent,
    },
  },
  iconRight: {
    marginLeft: "auto",
  },
}));

const Dropdown = () => {
  return (
    <MenuButton icon={<CaretIcon />}>
      <DropdownMenu />
    </MenuButton>
  );
};

function MenuButton(props) {
  const [open, setOpen] = useState(false);
  const color = useSelector((state) => state.colorPallete);
  const classes = useStyles(color);

  return (
    <li className={classes.navItem}>
      <a
        id="icon-button"
        className={classes.iconButton}
        onClick={() => setOpen(!open)}
      >
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

const DropdownMenu = () => {
  const color = useSelector((state) => state.colorPallete);
  const classes = useStyles(color);
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  const handleColorChange = (event) => {
    let isMounted = true;
    if (isMounted) {
      dispatch({ type: "COLOR", payload: event.props });
    }
    isMounted = false;
  };

  function DropdownItem(props) {
    const color = useSelector((state) => state.colorPallete);
    const classes = useStyles(color);
    return (
      <a
        href={props.sectionID}
        id="menu-item"
        className={classes.menuItem}
        onClick={() =>
          props.goToMenu && setActiveMenu(props.goToMenu) && handleColorChange
        }
      >
        <span id="icon-button" className={classes.iconButton}>
          {props.leftIcon}
        </span>
        {props.children}
        <span id="icon-right" className={classes.iconRight}>
          {props.rightIcon}
        </span>
      </a>
    );
  }

  return (
    <div
      id="dropdown"
      className={classes.dropdown}
      style={{ height: menuHeight }}
      ref={dropdownRef}
    >
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem sectionID="#about">About</DropdownItem>
          <DropdownItem sectionID="#projects">Projects</DropdownItem>
          <DropdownItem sectionID="#contact">Contact</DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="settings"
          >
            Color Theme
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>My Tutorial</h2>
          </DropdownItem>
          <div
            onClick={() => {
              dispatch({ type: "COLOR", payload: "blue" });
            }}
          >
            <DropdownItem leftIcon={<BoltIcon />}>Blue</DropdownItem>
          </div>
          <div
            onClick={() => {
              dispatch({ type: "COLOR", payload: "red" });
            }}
          >
            <DropdownItem leftIcon={<BoltIcon />}>Red</DropdownItem>
          </div>
          <div
            onClick={() => {
              dispatch({ type: "COLOR", payload: "green" });
            }}
          >
            <DropdownItem leftIcon={<BoltIcon />}>Green</DropdownItem>
          </div>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "animals"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
          <DropdownItem leftIcon="🐸">Frog</DropdownItem>
          <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
          <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Dropdown;
