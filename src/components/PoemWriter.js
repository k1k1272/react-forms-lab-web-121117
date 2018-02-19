import React from "react";


class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
      valid: true
    };
  }

  handleText = event => {
    this.setState({
      value: event.target.value,
    })

    let poem = event.target.value.split("\n").map(line => line.trim())
    if (poem && poem.length === 3) {
      this.setState({
        valid: (poem[0].split(" ").length === 5 && poem[1].split(" ").length === 3 && poem[2].split(" ").length === 5)
      })
    } else {
      this.setState({
        valid: false
      })
    }
  }

  render() {

    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.value} onChange={this.handleText}/>
        {!this.state.valid ? (
          <div id="poem-validation-error" style={{ color: "red"}}>
            This poem is not written in the right structure!
          </div>
        ) : null}
      </div>
    );
  }
}

export default PoemWriter;
