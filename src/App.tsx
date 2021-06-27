import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { PagesPaths } from './constants/pagesPaths';
import { ProfilePage } from './pages/ProfilePage';
import { SearchPage } from './pages/SearchPage';

export default function App() {
  return (
    <div>
      <Switch>
        <Route path={PagesPaths.Profile}>
          <ProfilePage />
        </Route>
        <Route path={PagesPaths.Search}>
          <SearchPage />
        </Route>
      </Switch>
    </div>
  );
}
