import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

import { Container, Menu, HeaderMenu, InfosUser, Buttons } from "./styles";

const Header: React.FC = () => {
  const [menuShow, setMenuShow] = useState(false);

  return (
    <>
      <Container>
        <div>
          <h1>FINTECH</h1>
        </div>
        <button onClick={() => setMenuShow(true)}>
          <span>SL</span>
        </button>
      </Container>
      {menuShow && (
        <Menu>
          <HeaderMenu>
            <button onClick={() => setMenuShow(false)}>
              <CloseIcon />
            </button>
          </HeaderMenu>
          <InfosUser>
            <div>
              <h1>SL</h1>
            </div>
            <p>Olá, Samuel Leite</p>
          </InfosUser>
          <Buttons>
            <a href="#">Conta</a>
            <a href="#">Sobre o APP</a>
            <a href="#">Fale conosco</a>
          </Buttons>
        </Menu>
      )}
    </>
  );
};

export default Header;
