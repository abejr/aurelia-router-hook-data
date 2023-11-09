import { IRouteableComponent, routes } from '@aurelia/router';
import { LoginPage } from './public/login/login-page';
import { HomePage } from './private/home/home-page';

@routes([
  {
    path: '',
    title: 'Home',
    component: HomePage,
    data: {
      private: true
    }
  },
  {
    path: 'login',
    title: 'Login',
    component: LoginPage,
    data: {
      private: false
    }
  },
])

export class MyApp implements IRouteableComponent { }
