// Importing diffrenr components from material UI package
import { AppBar, Toolbar, styled, Box } from "@mui/material";
import { Menu } from "@mui/icons-material"; // importin menu icon component from icons-material

// Appbar with custom CSS is stored as StyledApp component,
// TO use custom CSS we use styled() and custom CSS in ` `
// Styled(componentName) can be only used with material UI components to use styled with html tags use styled("htmlTag")with proper object
const StyledApp = styled(AppBar)`
  background: #fff;
  height: 70px;
`;

const MenuIcon = styled(Menu)`
  color: #000;
`;
// styled with html tag
/**
 * Rules to insert CSS as object
 * Normal CSS hyphenbased lowercase eg background-color (only lower case and '-')
 * but CSS in object is camalecase
 * backgroundColor: "stirng here" "#fff"
 * and , instead of ;
 *
 */
const Image = styled("img")({
  height: 55,
  margin: "auto",
  paddingRight: 70,
});

const Header = () => {
  const url =
    "https://assets.inshorts.com/website_assets/images/logo_inshorts.png";

  return (
    <StyledApp>
      <Toolbar>
        <MenuIcon />
        <Image src={url} alt="logo" />
      </Toolbar>{" "}
    </StyledApp>
  );
};

export default Header;
