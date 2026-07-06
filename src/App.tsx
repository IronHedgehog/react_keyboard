import React from 'react';

interface Props {}
interface State {
  pressedKey: string;
}

export class App extends React.PureComponent<Props, State> {
  state: State = {
    pressedKey: '',
  };

  onKeyDown = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.onKeyDown);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <>
        <div className="App">The last pressed key is [Enter]</div>
        {pressedKey ? (
          <p className="App__message">The last pressed key is [{pressedKey}]</p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </>
    );
  }
}
