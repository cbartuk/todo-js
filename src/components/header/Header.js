import "./header.scss";
import Button from "components/button";

const name = "Can Bartu";
const surname = "Kılıç";
const hello = `Merhaba Benim Adım ${name}`;
const isLoggedIn = false;

export default function Header({ title, bg, children }) {
  return (
    <>
      {children && <div className="child">{children}</div>}
      <header className={bg && `text-bg-${bg}`}>
        <h1 className="header"> {hello} </h1>
      </header>
      <h2>{` Merhaba Benim Adım ${name}`}</h2>
      <div>{isLoggedIn && `${name} ${surname} giriş yapmıştır`}</div>
      <div>{!isLoggedIn && `Lütfen giriş yapınız.`}</div>
      <div>{isLoggedIn ? `${name} ${surname}` : "Lütfen giriş yapınız"}</div>
      <div>{title}</div>
      <Button variant="secondary" size="sm">
        Button
      </Button>
      <Button className="bartu" variant="primary" size="md">
        Regular Button
      </Button>
      <Button variant="secondary" size="lg">
        Large Button
      </Button>
      <Button variant="secondary" size="lg" disabled>
        Disabled Button
      </Button>
      <Button variant="secondary" size="lg" outline>
        Outline Button
      </Button>
    </>
  );
}

Header.defaultProps = {
  bg: "primary",
};
