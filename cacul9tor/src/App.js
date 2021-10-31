import React from 'react'
import knopochki from './knopochki'
import './App.css'

class App extends React.Component {

  constructor() {
    super();

    this.state = {
        out: '0',
        firstOperant: ''
    }

    this.refOutput = React.createRef()
  }



  tapeNumber(value) {
      let currentvalue = value
      let output = this.refOutput.current

      this.setState({out: currentvalue})

      if (output.value === '0') { output.value = ''}

      output.value += currentvalue
  }

  tapeOperation(value){
    let output = this.refOutput.current
    console.log(output.value)
    if (value === 'CE') {
        output.value.length === 1 ? output.value = '0' : output.value = output.value.substring(0, output.value.length - 1)
    }

    else if (value === 'C') {
        output.value = '0'
    }

    else if (value === '=') {
        if (output.value.indexOf('+') !== -1) {
            output.value = parseFloat(output.value.substring(0, output.value.indexOf('+')))
            + parseFloat(output.value.substring(output.value.indexOf('+') + 1))
        }

        if (output.value.indexOf('-') !== -1) {
            output.value = parseFloat(output.value.substring(0, output.value.indexOf('-')))
                - parseFloat(output.value.substring(output.value.indexOf('-') + 1))
        }

        if (output.value.indexOf('*') !== -1) {
            output.value = parseFloat(output.value.substring(0, output.value.indexOf('*')))
                * parseFloat(output.value.substring(output.value.indexOf('*') + 1))
        }

        if (output.value.indexOf('/') !== -1) {
            output.value = parseFloat(output.value.substring(0, output.value.indexOf('/')))
                / parseFloat(output.value.substring(output.value.indexOf('/') + 1))
        }

        if (output.value.indexOf('^') !== -1) {
            output.value = parseFloat(output.value.substring(0, output.value.indexOf('^')))
                ** parseFloat(output.value.substring(output.value.indexOf('^') + 1))
        }

        // if (value === '+' || value === '-' || value === '*' || value === '/' || value === '^') {
        //     this.props.firstOperant = output.value.substring(0, output.value.length)
        // }

        // if (output.value.substring(this.state.firstOperant.length, this.state.firstOperant.length + 1) === '+') {
        //     output.value = parseFloat(this.state.firstOperant) +
        //         parseFloat(output.value.substring(this.state.firstOperant.length + 1))
        // }
        //
        // else if (output.value.substring(this.state.firstOperant.length, this.state.firstOperant.length + 1) === '-') {
        //     output.value = parseFloat(this.state.firstOperant) -
        //         parseFloat(output.value.substring(this.state.firstOperant.length + 1))
        // }
        //
        // else if (output.value.substring(this.state.firstOperant.length, this.state.firstOperant.length + 1) === '*') {
        //     output.value = parseFloat(this.state.firstOperant) *
        //         parseFloat(output.value.substring(this.state.firstOperant.length + 1))
        // }
        //
        // else if (output.value.substring(this.state.firstOperant.length, this.state.firstOperant.length + 1) === '/') {
        //     output.value = parseFloat(this.state.firstOperant) /
        //         parseFloat(output.value.substring(this.state.firstOperant.length + 1))
        // }
        //
        // else if (output.value.substring(this.state.firstOperant.length, this.state.firstOperant.length + 1) === '^') {
        //     output.value = parseFloat(this.state.firstOperant) **
        //         parseFloat(output.value.substring(this.state.firstOperant.length + 1))
        // }
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
