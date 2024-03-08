import { NavLink } from "react-router-dom";
import { S } from "./Header_Styles";
import { MyPostPropsType } from "./HeaderContainer";
export const Header: React.FC<MyPostPropsType> = (props:MyPostPropsType) => {
  return (
    <S.Header>
      <S.Img src="" />
      <S.LoginBlock>
        {props.auth.isAuth ?  props.auth.login : <NavLink to={"/login"}>Login</NavLink>}
       
      </S.LoginBlock>
    </S.Header>
  );
};
export default Header;
