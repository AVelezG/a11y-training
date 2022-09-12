import React from "react";

import { Menu } from "./components/molecules/Menu/Menu.component";
import { Presentation } from "./components/molecules/Presentation/Presentation.component";
import { Card } from "./components/molecules/Card/Card.component";
import { SectionImage } from "./components/molecules/SectionImage/SectionImage.component";
import { Footer } from "./components/molecules/Footer/Footer.component";
import { Form } from "./components/molecules/Form/Form.component";

import { CardsContainer, SectionForm } from "./app.styled";

function App() {
  return (
    <>
      {/* <header>
        <Menu />
      </header> */}
      <div>
        <Menu />
      </div>
      {/* <main>
        <Presentation />
        <CardsContainer>
          <Card />
          <Card />
        </CardsContainer>
        <SectionImage />
        <SectionForm>
          <Form />
        </SectionForm>
      </main> */}
      <div>
        <Presentation />
        <CardsContainer>
          <Card />
          <Card />
        </CardsContainer>
        <SectionImage />
        <SectionForm>
          <Form />
        </SectionForm>
      </div>
      {/* <footer>
        <Footer />
      </footer> */}
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
