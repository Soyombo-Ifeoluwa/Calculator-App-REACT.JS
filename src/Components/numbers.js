import { useState} from "react";
// import NumberFormat from "react-number-format";

const Numbers = () => {

  const [calc , setCalc] = useState("")
  const [result , setResult] = useState("")

  const ops = ["/" , "*" , "+" , "-" , "."];

  const UpdateCalc = value => {
    if(
      ops.includes(value) &&  calc === ''  ||
      ops.includes(value) &&  ops.includes(calc.slice(-1) 
      )
    ){
      return;
    }
    setCalc (calc + value );

    if (!ops.includes(value)){
      setResult( eval (calc + value).toString()
      );
    }
  };

  const Calculate = () => {
    setCalc(eval(calc).toString())
  };

  const DeleteLast = () => {
    if (calc === ''){
      return;
    }

    const value = (calc.slice(0 , -1));
    setCalc(value);
  }



  // const [preState, setPreState] = useState();
  // const [curState, setCurState] = useState();
  // const [input, setInput] = useState(0);
  // const [operate, setOperate] = useState(null);
  // const [total, setTotal] = useState(false);

  // const inputNum = (e) => {
  //   if (curState.includes(".") && e.target.innerText === ".") return;

  //   if (total) {
  //     setPreState("");
  //   }
  //   curState
  //     ? setCurState((pre) => pre + e.target.innerText)
  //     : setCurState(e.target.innerText);
  //   setTotal(false);
  // };

  // useEffect(() => {
  //   setInput(curState);
  // }, [curState]);

  // useEffect(() => {
  //   setInput("0");
  // }, []);

  // const Operator = (e) => {
  //   setTotal(false);
  //   setOperate(e.target.innerText);
  //   if (curState === "") return;
  //   if (preState !== "") {
  //     equals();
  //   } else {
  //     setPreState(curState);
  //     setCurState("");
  //   }
  // };

  // const equals = (e) => {
  //   if (e?.target.innerText === "=") {
  //     setTotal(true);
  //   }

  //   let calc;
  //   switch (operate) {
  //     case "/":
  //       calc = String(parseFloat(preState) / parseFloat(curState));
  //       break;

  //     case "+":
  //       calc = String(parseFloat(preState) + parseFloat(curState));
  //       break;

  //     case "-":
  //       calc = String(parseFloat(preState) - parseFloat(curState));
  //       break;

  //     case "*":
  //       calc = String(parseFloat(preState) * parseFloat(curState));
  //       break;
  //     default:
  //       return;
  //   }
  //   setInput("");
  //   setPreState(calc);
  //   setCurState("");
  // };

  // const reset = () => {
  //   setPreState("");
  //   setCurState("");
  //   setInput("0");
  // };

  return (
    <section>
     <div className="screen">
          { result ? <span>({result})</span> : '' }
          {calc || "0"}
     </div>

      <div className="cal-btn">
        <button
          type="button"
          value="/"
          className="value-btn"
          onClick={() => UpdateCalc ("/") }
        >
          {" "}
          /
        </button>

        <button
          type="button"
          value="*"
          className="value-btn"
          onClick={() => UpdateCalc ("*")}
        >
          {" "}
          *
        </button>

        <button
          type="button"
          value="Ac"
          className="value-btn AC"
          onClick={DeleteLast}
        >
          {" "}
          DEL
        </button>

        <button
          type="button"
          value="7"
          className="value-btn"
          onClick={() => UpdateCalc ("7")}
        >
          {" "}
          7
        </button>

        <button
          type="button"
          value="8"
          className="value-btn"
          onClick={() => UpdateCalc ("8")}
        >
          {" "}
          8
        </button>

        <button
          type="button"
          value="9"
          className="value-btn"
          onClick={() => UpdateCalc ("9")}
        >
          {" "}
          9
        </button>

        <button
          type="button"
          value="+"
          className="value-btn"
          onClick={() => UpdateCalc ("+")}
        >
          +
        </button>

        <button
          type="button"
          value="4"
          className="value-btn"
          onClick={() => UpdateCalc ("4")}
        >
          {" "}
          4
        </button>

        <button
          type="button"
          value="5"
          className="value-btn"
          onClick={() => UpdateCalc ("5")}
        >
          {" "}
          5
        </button>

        <button
          type="button"
          value="6"
          className="value-btn"
          onClick={() => UpdateCalc ("6")}
        >
          {" "}
          6
        </button>

        <button
          type="button"
          value="-"
          className="value-btn"
          onClick={() => UpdateCalc ("-")}
        >
          {" "}
          -{" "}
        </button>

        <button
          type="button"
          value="1"
          className="value-btn"
          onClick={() => UpdateCalc ("1")}
        >
          {" "}
          1
        </button>

        <button
          type="button"
          value="2"
          className="value-btn"
          onClick={() => UpdateCalc ("2")}
        >
          {" "}
          2
        </button>

        <button
          type="button"
          value="3"
          className="value-btn"
          onClick={() => UpdateCalc ("3")}
        >
          {" "}
          3
        </button>


        <button
          type="button"
          value="."
          className="value-btn"
          onClick={() => UpdateCalc (".")}
        >
          {""}.
        </button>

       

        <button
          type="button"
          value="0"
          className="value-btn col-span-2"
          onClick={() => UpdateCalc ("0")}
        >
          0
        </button>

      <button type="button"
        className="value-btn col-span" 
        onClick={Calculate}
        >
          =
        </button>
      </div>
    </section>
  );
};

export default Numbers;
