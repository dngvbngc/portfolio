import { Image } from "@chakra-ui/react";
import favicon from "../assets/favicon.svg";

interface Props {
  id: string;
  position: string;
}

const Spinner = ({ id, position }: Props) => {
  const intId = parseInt(id);
  return (
    <Image
      className='spinner'
      id={`spinner${id}`}
      display='block'
      src={favicon}
      boxSize='6vw'
      position='absolute'
      top={position === "top" ? "18vh" : "82vh"}
      right={
        intId <= 4 ? `${(intId - 1) * 6 + 10}vw` : `${(intId - 5) * 6 + 10}vw`
      }
    ></Image>
  );
};

export default Spinner;
