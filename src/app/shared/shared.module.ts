import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {SharedCommonModule} from './shared-common.module';
import {SharedLibsModule} from './shared-libs.module';
import {HasAnyAuthorityDirective} from './auth/has-any-authority.directive';

@NgModule({
  imports: [SharedLibsModule, SharedCommonModule],
  declarations: [HasAnyAuthorityDirective],
  entryComponents: [],
  exports: [SharedCommonModule, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule
    };
  }
}
