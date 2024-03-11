import { useContext } from "react";
import { Link } from "react-router-dom";

import Header from "../Header";

import {
  NotFoundContainer,
  NotFoundCard,
  NotFoundImage,
  NotFoundTitle,
  NotFoundDescription,
  GotoHomeBtn,
} from "./styledComponents";

import AppContext from "../../context/appContext";

const NotFound = () => {
  const context = useContext(AppContext);
  const { isdark } = context;
  return (
    <>
      <Header />
      <NotFoundContainer isdark={isdark}>
        <NotFoundCard isdark={isdark}>
          <NotFoundImage
            src="https://img.freepik.com/free-vector/404-error-with-person-looking-concept-illustration_114360-7982.jpg?t=st=1710151232~exp=1710154832~hmac=429353f25fbd94531d72a1615318a8bda1d82f6385dd679d5e63ab253c208062&w=740"
            alt="not found"
          />
          <NotFoundTitle isdark={isdark}>Page Not Found</NotFoundTitle>
          <NotFoundDescription isdark={isdark}>
            We are sorry, the page you are looking for cannot be found.
          </NotFoundDescription>
          <Link to="/">
            <GotoHomeBtn>Go to Home</GotoHomeBtn>
          </Link>
        </NotFoundCard>
      </NotFoundContainer>
    </>
  );
};

export default NotFound;
