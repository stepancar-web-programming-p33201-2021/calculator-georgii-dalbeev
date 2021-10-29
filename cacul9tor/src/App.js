import React from 'react'
import knopochki from './knopochki'
import './App.css'

class App extends React.Component {

  constructor() {
    super();

    this.state = {
        out: '0',
        firstOperant: 0,
        secondOperant: 0
    }

    this.refOutput = React.createRef()
  }

  tapeNumber(value) {
      let currentvalue = value
      let output = this.refOutput.current

      this.setState({out: currentvalue})

      if (output.value === '0') { output.value = ''}

      else if (value === '+' || value === '-' || value === '*' || value === '/' || value === '^') {
          this.setState({firstOperant: output.value.substring(0, output.value.length)})
      }

      output.value += currentvalue
  }

  tapeOperation(value){
    let output = this.refOutput.current

    if (value === 'CE') {
        output.value.length === 1 ? output.value = '0' : output.value = output.value.substring(0, output.value.length - 1)
    }

    else if (value === 'C') {
        output.value = '0'
    }
    else if (value === '=') {
        console.log(output.value,output.value.substring(this.state.firstOperant.length + 1))
        this.setState({secondOperant: output.value.substring(this.state.firstOperant.length + 2)})
        //output.value = this.state.secondOperant
        console.log(this.state.firstOperant, this.state.secondOperant)
        //output.value = parseFloat(this.state.firstOpetant, 10) + parseFloat(this.state.secondOperant, 10)
    }
  }

  render() {
    return (
        <div className="container">
          <div className="output">
            <input ref={this.refOutput} type="text" defaultValue={this.state.out} />
          </div>

          <div className="buttons">
              {knopochki.buttons.map(item => <button onClick={() => {this.tapeNumber(item.val)}}>{item.val}</button>)}
              {knopochki.operations.map(item => <button onClick={() => {this.tapeOperation(item.val)}}>{item.val}</button>)}
          </div>
        </div>
    )
  }
}

export default App
