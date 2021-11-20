import { NgModule } from '@angular/core'

import { PIPES } from './pipes'

const DECLARATIONS = [...PIPES]

@NgModule({
  declarations: [DECLARATIONS],
  exports: [DECLARATIONS],
  imports: [],
  providers: [],
})
export class BaloisePipeModule {}
