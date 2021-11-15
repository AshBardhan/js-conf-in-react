import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      abc: 6,
      sunAngle: 0,
      moonAngle: 0,
      primaryColor: '#232f47',
      secondaryColor: '#f5b33b'
    };
  }

  componentDidMount() {
    this.setState({sunAngle: (12 - this.state.abc) * (360/24)})
    this.setState({moonAngle: this.state.sunAngle - 180})
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  tick() {
    this.setState({abc : (this.state.abc + 1) % 24});
    this.setState({sunAngle: (12 - this.state.abc) * (360/24)})
    this.setState({moonAngle: this.state.sunAngle - 180})
    if(!(this.state.abc >= 6 && this.state.abc <= 18)){
      this.setState({
        primaryColor: '#f5b33b',
        secondaryColor: '#001119'
      });
    } else {
      this.setState({
        primaryColor: '#232f47',
      secondaryColor: '#f5b33b'
      });
    }
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  render(){
    return (
      <>
     <div class="bg-drop"  style={{backgroundColor: this.state.secondaryColor}}></div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 468 468" style={{borderColor: this.state.primaryColor}}>
        <g class="moon" transform={"rotate(" + this.state.moonAngle + " 250 525)"}>
            <circle cx="250" cy="212" r="120" fill="#fff"/>
            <circle cx="250" cy="152" r="20" fill="#000" fillOpacity="0.1" />
            <circle cx="330" cy="262" r="20" fill="#000" fillOpacity="0.1" />
            <circle cx="210" cy="282" r="20" fill="#000" fillOpacity="0.1" />
            <circle cx="160" cy="182" r="20" fill="#000" fillOpacity="0.1" />
            <circle cx="210" cy="122" r="10" fill="#000" fillOpacity="0.1" />
            <circle cx="290" cy="122" r="10" fill="#000" fillOpacity="0.1" />
            <circle cx="140" cy="212" r="10" fill="#000" fillOpacity="0.1" />
            <circle cx="340" cy="172" r="10" fill="#000" fillOpacity="0.1" />
            <circle cx="350" cy="232" r="10" fill="#000" fillOpacity="0.1" />
            <circle cx="310" cy="292" r="10" fill="#000" fillOpacity="0.1" />
          </g>
          <circle class="sun" transform={"rotate(" + this.state.sunAngle + " 250 525)"} cx="250" cy="212" r="120" fill="#d6422c"/>
          <path class="india-gate" fill={this.state.primaryColor} d="M-62.89 341.22c0-19.06.4-38.32-.33-57.53-.15-3.87-3.91-8.41-7.24-11.14-3.5-2.87-8.37-4.3-12.84-5.71-7.89-2.49-10.22-7.2-6.65-15.9h26.64c0-6.26-.31-11.39.08-16.47.45-5.71-1.69-11.28 5.22-16.52 3.67-2.78 1.6-13.13 2.2-21.19h25.33v-36.12H6.68l1-16.56c14.65 2.85 26.29-2.4 35.69-12.43 8.52-9.1 25-11.33 23.86-28.8h59.66c15.78 22 30.6 41.54 59.94 43.05l1.28 14.74H226v36.12h24.5c.22 5.21-.19 9.26.72 13 1 3.93 3.36 7.45 4.79 11.29a26.69 26.69 0 0 1 1.88 8.1c.26 6.88.09 13.78.09 21.83h33c3.36 8.71 1.28 13.27-6.34 16.05-9.17 3.35-18 7.67-28 12 0 19-.15 39.15.22 59.31 0 2.22 3.49 4.16 4.59 6.61 1.44 3.17 3.19 9.59 3 9.69-11.69 4.79-7.06 15.27-7.69 23.67-.43 5.79-.08 11.65-.08 17.93l13.38 2.74c-2.43 4.09-3.72 9.25-6.48 10.32-6.33 2.47-7 6.55-7 12.58.21 36 .1 72 .1 108.31l16.37 5.13v11.78H153.37c-17.15 0-17.86-.78-17.1-18.62l9.34-2.41c.21-2.7.61-5.53.61-8.37 0-45.78.44-91.56-.26-137.33a120 120 0 0 0-6.2-36.17c-6.43-18.95-22.83-29.07-43.06-28.82s-35.23 9.25-42.33 28.28a93.07 93.07 0 0 0-5.87 30.7c-.63 48-.46 95.91-.1 143.87 0 3.88 3.69 7.74 6.89 11.12 2.61 16.47 1.5 17.71-15.29 17.72H-67.91c-3.54 0-7.08-.32-10.54-.49-2.79-10.09-1.94-16.9 10.21-17.75 2.1-.15 5.57-4.63 5.6-7.13.37-35.6.32-71.21.09-106.81 0-2.43-1.84-5.22-3.56-7.19-4.14-4.74-6.76-8.6 1.2-12.39 1.65-.79 2.31-4.87 2.42-7.47a214.59 214.59 0 0 0-.06-22.87c-.18-2.71-2.22-5.37-3.68-7.89-1.82-3.13-5.57-6.22-5.36-9.1.16-2.26 5.11-4.16 8.7-6.76Z"/>
          <text class="js-text" fill={this.state.primaryColor} fontFamily="MyriadPro-Bold,Myriad Pro" fontSize="115" fontWeight="700" transform="translate(340 450)">{this.state.abc}</text>
        </svg>
        </>
      );
  }
  
}

export default App;
