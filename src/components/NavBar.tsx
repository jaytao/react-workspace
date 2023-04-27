import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavBarItem } from "../utils/navbar-items";

const drawerWidth = 240;

type NavBarProps = {
  navBarItems: NavBarItem[];
  onItemClick: (item: NavBarItem) => void;
};

type NavBarState = {
  selected: NavBarItem;
};

class NavBar extends React.Component<NavBarProps, NavBarState> {
  constructor(props: NavBarProps) {
    super(props);
    this.state = { selected: props.navBarItems[0]};
  }

  selectListItem(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    item: NavBarItem
  ) {
    this.setState({ selected: item });
    this.props.onItemClick(item);
  }

  render() {
    const { navBarItems } = this.props;
    const { selected } = this.state;

    return (
      <div>
        <Divider />
        <List>
          {navBarItems.map((item, index) => (
            <ListItem key={item} disablePadding>
              <ListItemButton
                selected={selected === item}
                onClick={(event) => this.selectListItem(event, item)}
              >
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

export default NavBar;
