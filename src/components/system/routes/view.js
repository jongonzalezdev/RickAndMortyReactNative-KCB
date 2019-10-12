import React from 'react';
import {Router, Stack, Scene, Actions} from 'react-native-router-flux';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene
            key="Characters"
            //component={}
            rightTitle="Crear"
            //onRight={}
          />
        </Stack>
      </Router>
    );
  }
}

export default Routes;
