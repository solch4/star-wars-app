type Props = {
  id: string;
  name: string;
  eyeColor: string;
  gender: string;
};

const CharacterCard = ({ name, eyeColor, gender }: Props) => {
  return (
    <>
      <h2>{name}</h2>
      <p>Eye color: {eyeColor}</p>
      <p>Gender: {gender}</p>
    </>
  );
};

export default CharacterCard;
