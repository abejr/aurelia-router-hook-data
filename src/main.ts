import Aurelia from 'aurelia';
import { MyApp } from './my-app';
import { RouterConfiguration } from '@aurelia/router';
import { AuthenticationHook } from './common/hooks/authentication-hook';

const appName = 'Aurelia';

Aurelia
  .register(RouterConfiguration.customize({
    useUrlFragmentHash: false,
    title: appName + ' ${appTitleSeparator} ${componentTitles}',
  }), AuthenticationHook)
  .app(MyApp)
  .start();
