import Link from "next/link";
import Button from "@material-ui/core/Button";

export default function Banner() {
  return (
    <>
      <div className="banner-container">
        <div className="banner-items">
          <h1>Movie Shop</h1>
          <Link href={"/"} as="/peliculas" passHref>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#00CC7C",
                color: "#fff",
                letterSpacing: "2px",
              }}
            >
              Ver películas
            </Button>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .banner-container {
          width: 100%;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: linear-gradient(to top, #002236, transparent),
            url(/banner.png);
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
          padding-top: 27.69%; /*img height / img width * container width*/
          height: 400px;
          background-size: auto 100%;
        }
        h1 {
          font-family: DMSerifDisplay-Regular;
          color: #fff;
          font-size: 3rem;
          text-align: center;
        }
        .banner-items {
          z-index: 1;
          width: 200px;
          top: -25%;
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: center;
          align-self: center;
          flex-direction: column;
          margin: 50px;
        }
        Button {
          font-family: TipperaryeTextW01-Bold;
          text-transform: uppercase;
        }
        @media (min-width: 376px) {
          .banner-container {
            background: linear-gradient(to right, #002236, transparent),
              url(/banner.png);
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
            padding-top: 27.69%; /*img height / img width * container width*/
            height: 300px;
            background-size: auto 100%;
          }
          .banner-items {
            position: absolute;
            top: -25px;
            left: 0;
            align-items: flex-start;
            margin-left: 100px;
          }
          h1 {
            text-align: left;
          }
        }
      `}</style>
    </>
  );
}
