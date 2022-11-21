import React, { useState, useEffect } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [decimalTime, setdecimalTime] = useState(0.04);
  const [readtime, setReadtime] = useState({});

  useEffect(() => {
    setdecimalTime(0.005 * text.split(/\s+/).filter(ele => { return ele.length !== 0; }).length);

  }, [text]);

  useEffect(() => {
    setReadtime(
      {
        minutes: Math.floor(decimalTime),
        seconds: Math.round((decimalTime - Math.floor(decimalTime)) * 60)
      }
    );
  }, [decimalTime]);


  const onChangehandler = (event) => {
    setText(event.target.value);
  }

  const UppercaseClickHandler = () => {
    setText(text.toUpperCase());
    props.showAlert("Text changed to Uppercase", "success");
  }

  const LowercaseClickHandler = () => {
    setText(text.toLowerCase());
    props.showAlert("Text changed to Lowercase", "success");
  }

  const clearHandler = () => {
    setText("");
    props.showAlert("Text board Cleared", "success");
  }

  const TitlecaseClickHandler = () => {
    let arrL = text.split(/\n/);
    arrL.forEach((elementL, indexL) => {
      let arr = elementL.split(" ");
      arr.forEach((element, index) => {
        arr[index] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
        arrL[indexL] = arr.join(" ");
      })
    });
    setText(arrL.join("\n"));
    props.showAlert("Text changed to Title Case", "success");
  }

  const SentencecaseClickHandler = () => {
    let arrL = text.split(/\n/);
    arrL.forEach((elementL, indexL) => {
      let arr = elementL.split(".");
      arr.forEach((element, index) => {
        arr[index] = element.trim().charAt(0).toUpperCase() + element.trim().slice(1).toLowerCase();
        console.log(arr);
        arrL[indexL] = arr.join(". ");
      })
    });
    setText(arrL.join("\n"));
    props.showAlert("Text changed to Sentence Case", "success");
  }

  // with onchange fn there wiill always be a  delay on text updatation

  const copyHandler = () => {
    document.getElementById("textarea").select();
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to Clipboard", "success");
  }

  const handleExtraSpaces = () => {
    let arr = text.split(/[ ]+/);
    setText(arr.join(" "));
    props.showAlert("All Extra spaces have been Removed", "success");
  }

  return (
    <>
      <div className="container">
        <div className="row my-3">
          <div className=" col-md-9" id="textAreaDiv">
            <label htmlFor="textarea" className="form-label">
              <h3>{props.heading}</h3>
            </label>
            <textarea className="form-control" id="textarea" rows="7" value={text} onChange={onChangehandler} placeholder="Enter text here.."></textarea>
            <button disabled={text.length === 0} className={`btn btn-${props.mode} mt-3 mx-1 btnGroup`} onClick={UppercaseClickHandler}>UPPERCASE</button>
            <button disabled={text.length === 0} className={`btn btn-${props.mode} mt-3 mx-1 btnGroup`} onClick={LowercaseClickHandler}>lowercase</button>
            <button disabled={text.length === 0} className={`btn btn-${props.mode} mt-3 mx-1 btnGroup`} onClick={TitlecaseClickHandler}>Title Case</button>
            <button disabled={text.length === 0} className={`btn btn-${props.mode} mt-3 mx-1 btnGroup`} onClick={SentencecaseClickHandler}>Sentence case</button>
            <button disabled={text.length === 0} className={`btn btn-${props.mode} mt-3 mx-1 btnGroup`} onClick={clearHandler}>Clear All</button>
            <button disabled={text.length === 0} className={`btn btn-${props.mode} mt-3 mx-1 btnGroup`} onClick={copyHandler}>Copy Text</button>
            <button disabled={text.length === 0} className={`btn btn-${props.mode} mt-3 mx-1 btnGroup`} onClick={handleExtraSpaces}>Remove Extra Spacing</button>

          </div>
          <div className="col-md-3 mt-5">
            <div className={`card border-${props.mode} mb-3`} >
              <div className={`card-header bg-${props.mode}`} id="card-header">Details</div>
              <div className="card-body">

                <div className="d-flex justify-content-between my-2">
                  <h6 className="card-title"> Words</h6>
                  <div className={`badge text-bg-${props.mode} text-end`}>{text.split(/\s+/).filter(ele => { return ele.length !== 0; }).length} </div>
                </div>

                <div className="d-flex justify-content-between my-2">
                  <h6 className="card-title">Characters:</h6>
                  <span className={`badge text-bg-${props.mode} text-end`}>{text.length}</span>
                </div>

                <div className="d-flex justify-content-between my-2">
                  <h6 className="card-title">Sentences:</h6>
                  <span className={`badge text-bg-${props.mode} text-end`}>{text.split(/\.+/).filter(ele => { return ele.length !== 0; }).length}</span>
                </div>

                <div className="d-flex justify-content-between my-2" >
                  <h6 className="card-title">Read Time(min):</h6>
                  <span className={`badge text-bg-${props.mode} text-end`}>
                    {readtime.minutes ? readtime.minutes + " min " : null}{readtime.seconds + " sec"}
                  </span>
                </div>


              </div>
            </div>
          </div>



        </div>
        <div id="preview">
          <h3>Preview</h3>
          <pre className=" text-wrap">{text.length > 0 ? text : "Nothing to preview"}</pre>
        </div>
      </div>

    </>
  );
}
