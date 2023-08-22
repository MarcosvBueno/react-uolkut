import { Details, ParagraphHiddenInMobile } from "./style";
function EditDetails() {
  return (
    <Details>
      <div>
        <h2>Músicas:</h2>
        <p>Trap </p>
        <ParagraphHiddenInMobile>Rap </ParagraphHiddenInMobile>
        <ParagraphHiddenInMobile>Indie </ParagraphHiddenInMobile>
        <button>Ver todos</button>
      </div>
      <div>
        <h2>Filmes:</h2>
        <p>A rede social</p>
        <ParagraphHiddenInMobile>Meu amigo totoro</ParagraphHiddenInMobile>
        <button>Ver todos</button>
      </div>
    </Details>
  );
}

export default EditDetails;
