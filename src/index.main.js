import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Onboarding from './screens/Onboarding';
import MedicineSelector from './components/quiero-pedir/screens/medicine-selector';
import Tablet from './components/quiero-pedir/screens/tablet';
import FoundationsSelector from './components/quiero-pedir/screens/foundations-selector';
import Scanner from './components/quiero-pedir/screens/scanner';
import Camara from './components/quiero-pedir/screens/camara';
import Confirmation from './components/quiero-pedir/screens/confirmation';

import MedicineSelectorDonar from './components/quiero-donar/screens/medicine-selector';
import TabletDonar from './components/quiero-donar/screens/tablet';
import FoundationsSelectorDonar from './components/quiero-donar/screens/foundations-selector';
import ScannerDonar from './components/quiero-donar/screens/scanner';
import CamaraDonar from './components/quiero-donar/screens/camara';
import ConfirmationDonar from './components/quiero-donar/screens/confirmation';

class Main extends React.Component {
  state = {
    idMedicamento: 0,
    cant: 0,
    idFundacion: 0,
    codigo: 0
  }
  medicamentos = (id) => {
    this.setState({ idMedicamento: id });
  }
  fundacion = (id) => {
    this.setState({ idFundacion: id })
  }
  render() {
    console.log(this.state);
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Onboarding} />
          <Route exact path="/medicine-selector" render={(props) => <MedicineSelector{...props} medicamentos={this.medicamentos} />} />
          <Route exact path="/tablet" component={Tablet} />
          <Route exact path="/foundations-selector" render={(props) => <FoundationsSelector{...props} fundacion={this.fundacion} />} />
          <Route exact path="/scanner" component={Scanner} />
          <Route exact path="/camara" component={Camara} />
          <Route exact path="/confirmation" component={Confirmation} />

          <Route exact path="/medicine-selector-donar" render={(props) => <MedicineSelectorDonar{...props} medicamentos={this.medicamentos} />} />
          <Route exact path="/tablet-donar" component={TabletDonar} />
          <Route exact path="/foundations-selector-donar" render={(props) => <FoundationsSelectorDonar{...props} fundacion={this.fundacion} />} />
          <Route exact path="/scanner-donar" component={ScannerDonar} />
          <Route exact path="/camara-donar" component={CamaraDonar} />
          <Route exact path="/confirmation-donar" component={ConfirmationDonar} />
        </Switch>
      </main>
    );
  }
}

export default Main;
