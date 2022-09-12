import React, { useState } from "react";
import { BiLinkExternal } from "react-icons/bi";
import { VscTwitter, VscGithubInverted } from "react-icons/vsc";
import { FaYoutube } from "react-icons/fa";

import {
  FooterContainer,
  FooterExternalLink,
  FooterAnchor,
  FooterSocialNetwork,
} from "./Footer.styled";

export interface FooterProps {
  onClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ ...props }) => {
  return (
    <FooterContainer>
      <div>LOGO</div>
      <div>
        <p>
          <FooterAnchor href="https://a11y-notes.web.app/" target="_blank">
            Notes of a11y{" "}
            <FooterExternalLink>(open in new tab)</FooterExternalLink>
            <BiLinkExternal />
          </FooterAnchor>
        </p>
      </div>
      <FooterSocialNetwork>
        <FooterAnchor href="https://twitter.com" target="_blank">
          Twitter <FooterExternalLink>(open in new tab)</FooterExternalLink>
          <VscTwitter />
        </FooterAnchor>
        <FooterAnchor href="https://github.com" target="_blank">
          GitHub <FooterExternalLink>(open in new tab)</FooterExternalLink>
          <VscGithubInverted />
        </FooterAnchor>
        <FooterAnchor href="" target="_blank">
          Youtube <FooterExternalLink>(open in new tab)</FooterExternalLink>
          <FaYoutube />
        </FooterAnchor>
      </FooterSocialNetwork>
    </FooterContainer>
  );
};
