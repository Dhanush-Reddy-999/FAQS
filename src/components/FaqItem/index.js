import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {
    show: false,
  }

  toggle = () => {
    const {show} = this.state
    if (show) {
      this.setState({show: false})
    } else {
      this.setState({show: true})
    }
  }

  showAnswer = () => {
    const {show} = this.state
    const {faqData} = this.props
    const {answerText} = faqData
    if (show) {
      return (
        <div>
          <hr className="line-style" />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  showImage = () => {
    const plusImage =
      'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const minusImage =
      'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    const {show} = this.state
    const imgSrc = show ? minusImage : plusImage
    const altText = show ? 'minus' : 'plus'
    return (
      <button type="button" className="button" onClick={this.toggle}>
        <img src={imgSrc} alt={altText} className="image" />
      </button>
    )
  }

  render() {
    const {faqData} = this.props
    const {questionText} = faqData

    return (
      <li className="outerCard">
        <div className="innerCard">
          <h1 className="question">{questionText}</h1>
          {this.showImage()}
        </div>
        {this.showAnswer()}
      </li>
    )
  }
}

export default FaqItem
