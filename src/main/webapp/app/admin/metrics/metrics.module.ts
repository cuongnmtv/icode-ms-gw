import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ICodeMicroserviceSharedModule } from 'app/shared/shared.module';

import { MetricsComponent } from './metrics.component';

import { metricsRoute } from './metrics.route';

@NgModule({
  imports: [ICodeMicroserviceSharedModule, RouterModule.forChild([metricsRoute])],
  declarations: [MetricsComponent],
})
export class MetricsModule {}
