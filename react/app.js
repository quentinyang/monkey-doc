import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import Monkey from 'monkey/lib/Monkey.js';
var {Picker, View} = Monkey;

let App = React.createClass({
    render() {
        return (
            <div style={{}}>
              <View>
                App
              </View>
              <Picker/>
            </div>
        )
    },
    propTypes: {
        label: PropTypes.string
    }
});

render(<App/>, document.getElementById('app'))
