import React from "react";
import NavBar from "../components/NavBar";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { navBarItems, NavBarItem } from "../utils/navbar-items";
import CloudflareComponent from "../components/Cloudflare";
import CommandsComponent from "../components/Commands";
import FormatComponent from "../components/Format";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

type HomePageState = {
  selectedItem: NavBarItem;
};

class HomePage extends React.Component<{}, HomePageState> {
  //private navBarRef = React.useRef(null)
  constructor(props: any) {
    super(props);
    this.state = {
      selectedItem: NavBarItem.Cloudflare,
    };
    this.handleNavBarItemClick = this.handleNavBarItemClick.bind(this);
  }

  handleNavBarItemClick(item: NavBarItem) {
    this.setState({ selectedItem: item });
  }

  chooseComponent() {
    const { selectedItem } = this.state;
    if (selectedItem === NavBarItem.Cloudflare) {
      return <CloudflareComponent />;
    } else if (selectedItem === NavBarItem.Commands) {
      return <CommandsComponent />;
    } else if (selectedItem === NavBarItem.Format) {
      return <FormatComponent />;
    }
    return "Found nothing";
  }
  render() {
    return (
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={2}>
          <NavBar
            navBarItems={navBarItems}
            onItemClick={this.handleNavBarItemClick}
          />
        </Grid>
        <Grid item xs={10}>
          <Item sx={{ "text-align": "left" }}>{this.chooseComponent()}</Item>
        </Grid>
      </Grid>
    );
  }
}

export default HomePage;
