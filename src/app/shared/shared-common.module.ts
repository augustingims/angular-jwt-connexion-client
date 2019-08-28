import { NgModule } from '@angular/core';
import {SharedLibsModule} from './shared-libs.module';

@NgModule({
  imports: [SharedLibsModule],
  declarations: [],
  exports: [SharedLibsModule]
})
export class SharedCommonModule {}
