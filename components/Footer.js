import styled from 'styled-components';
import { Link } from '@material-ui/core';
import * as React from "react";


const FooterSection = styled.div`
  background: #000;
  color: #fff;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterLink = styled(Link)({
  color: "white",
  fontFamily: "Aleo",
  textAlign: "center"
});


const Footer = () => {
  return (
    <FooterSection>
      <FooterLink href="#" underline="none" variant="caption" >Design and Built by Tenzin Tamdin 2021</FooterLink>
    </FooterSection>
  );
};

export default Footer;