import Button from "@material-ui/core/Button";

export default function Pages() {
  return (
    <>
      <div>
        <Button variant="outlined" style={{margin: "5px", fontFamily: "TipperaryeTextW01-Bold", color: "#fff", backgroundColor: "#6d798a"}}>
        1          
        </Button>
        <Button variant="outlined" style={{margin: "5px", fontFamily: "TipperaryeTextW01-Bold"}} disabled>
        2          
        </Button>
        <Button variant="outlined" style={{margin: "5px", fontFamily: "TipperaryeTextW01-Bold"}} disabled>
        3          
        </Button>
      </div>
      <style jsx>{`
        div {
          padding: 5px;
          width: 100vw;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }
     `}</style>
    </>
  );
}
