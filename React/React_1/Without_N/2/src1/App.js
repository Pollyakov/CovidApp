import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.textareaRef = React.createRef();
  }

  copy = () => {
    this.textareaRef.current.select();
    document.execCommand('copy');
  };

  render() {
    return (
      <div>
        <textarea ref={this.textareaRef}></textarea>
        <button style={{ display: 'block' }} onClick={this.copy}>
          Copy
        </button>
      </div>
    );
  }
}

export default App;