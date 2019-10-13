import React from 'react';
import {Router, Stack, Scene, Actions} from 'react-native-router-flux';
import {Characters, CharacterDetail, CharacterAdd} from '../../pages';
import {navBarStyles} from './styles';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene
            key="Characters"
            component={Characters}
            title={'Rick & Morty'}
            rightTitle="Crear"
            onRight={() => Actions.CharacterAdd()}
            {...navBarStyles}
          />

          <Scene
            key="CharacterDetail"
            component={CharacterDetail}
            {...navBarStyles}
          />

          <Scene
            key="CharacterAdd"
            component={CharacterAdd}
            title={'Add character'}
            {...navBarStyles}
          />
        </Stack>
      </Router>
    );
  }
}

export default Routes;
