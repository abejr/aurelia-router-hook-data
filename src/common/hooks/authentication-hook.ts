import { lifecycleHooks } from '@aurelia/runtime-html';
import { Parameters, Navigation, RoutingInstruction } from '@aurelia/router';

@lifecycleHooks()
export class AuthenticationHook {
  canLoad(viewModel, params: Parameters, instruction: RoutingInstruction, navigation: Navigation) {
    console.log('navigation data', navigation.data)

    // if (navigation.data.private === false) {
    //   return true;
    // }

    return true;
  }
}