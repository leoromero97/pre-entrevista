import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Cover from './screens/Onboarding/Cover';
import Presentation from './screens/Onboarding/Presentation';
import Tutorial from './screens/Tutorial';
import TutorialStep01 from './screens/Tutorial/screens/step01';
import TutorialStep02 from './screens/Tutorial/screens/step02';
import TutorialStep03 from './screens/Tutorial/screens/step03';
import TutorialStep04 from './screens/Tutorial/screens/step04';

class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Cover} />
          <Route exact path="/presentation" component={Presentation} />
          <Route exact path="/tutorial" component={Tutorial} />
          <Route exact path="/tutorial-step-01" component={TutorialStep01} />
          <Route extact path="/tutorial-step-02" component={TutorialStep02} />
          <Route extact path="/tutorial-step-03" component={TutorialStep03} />
          <Route extact path="/tutorial-step-04" component={TutorialStep04} />
        </Switch>
      </main>
    );
  }
}

export default Main;
