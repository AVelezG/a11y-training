import React from "react";
import { HiCursorClick } from "react-icons/hi";
import { Button } from "../../atoms/Button/Button.component";

import { CardContainer, CardTitle, CardBody, CardFooter } from "./Card.styled";

export interface CardProps {
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ ...props }) => {
  return (
    <CardContainer>
      <CardTitle>Hello</CardTitle>
      <CardBody>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero quo
        voluptatibus nostrum placeat provident repellat at iusto. Natus,
        voluptatibus tempora eius iusto rem, culpa explicabo, quibusdam illo
        quas reprehenderit dolore!
      </CardBody>
      <CardFooter>
        {/* Rule: 2.4.4 Link Purpose (In Context) More Info:
        https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#link-purpose-in-context
        Tool: Only with experience  */}
        {/* Solution */}
        {/* <Button variant="primary" label="Read complete info" />
        <Button variant="secondary" label="See other think" /> */}
        <Button variant="primary" label="Read complete info" />
        <Button variant="secondary" label="See more information" />
      </CardFooter>
    </CardContainer>
  );
};
