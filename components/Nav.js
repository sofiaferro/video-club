import {useState, useEffect} from "react";
import Link from "next/link";
import FavoriteBorderTwoToneIcon from "@material-ui/icons/FavoriteBorderTwoTone";

export default function Nav() {

    const [path, setPath] = useState('');

    const activeClass = {
        color: "#00CC7C"
    }

    useEffect(() => {
        setPath(window.location.pathname)
      }, []);
    

  return (
    <>
      <nav>
        <main>
          <div>
            <h1>Ms</h1>
          </div>
          <ul>
            <li>
              <Link href="/">
                <a style={path === "/" ? activeClass : null}>Home</a>
              </Link>
            </li>
            <li style={{ marginLeft: "50px" }}>
              <Link href="/favoritos">
                <a style={path === "/favoritos" ? activeClass : null}>Favoritos</a>
              </Link>
            </li>
            <Link href={path === "/" ? "/favoritos" : "/"}>
              <a className="fav-icon" style={path === "/favoritos" ? activeClass : null}>{<FavoriteBorderTwoToneIcon />}</a>
            </Link>
          </ul>
        </main>
      </nav>

      <style jsx>{`
        main {
          background-color: #fffff;
          width: 90vw;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
        h1 {
          font-family: DMSerifDisplay-Regular;
        }
        ul {
          list-style-type: none;
          text-decoration: none;
          display: flex;
          flex-direction: row;
          align-items: center;
          font-family: TipperaryeTextW01-Bold;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #6d798a;
          align-self: right;
        }
        li {
          margin: 5px;
        }
        .fav-icon {
            display: flex;
        }
        @media (max-width: 375px) {
          li {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
