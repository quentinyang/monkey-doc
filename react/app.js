import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import Nuke from 'nuke';
var {Picker, View} = Nuke;

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
