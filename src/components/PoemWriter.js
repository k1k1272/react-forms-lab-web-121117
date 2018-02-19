import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
      hasError: false
    };
  }

  handleText = event => {
    this.setState({
      value: event.target.value
    })

    let errorFound = false
    let poem = event.target.value.split("\n")
    if (poem.length === 3) {
      let lineOne = poem[0]
      let lineTwo = poem[1]
      let lineThree = poem[2]

      if (lineOne.split(" ").length !== 5) {
        hasError: true
      } else if (lineTwo.split(" ").length !== 3) {
        hasError: true
      } else if (lineThree.split(" ").length !== 5) {
        hasError: true
      }
    } else {
      hasError: true
      console.log("not working")
    }

  }

  render() {

    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.value} onChange={this.handleText}/>
        <div id="poem-validation-error" style={{ color: "red"}}>
          This poem is not written in the right structure!
        </div>
      </div>
    );
  }
}

export default PoemWriter;
