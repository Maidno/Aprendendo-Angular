import { Pipe, PipeTransform } from '@angular/core';
// Seguindo as práticas do Style Guide os imports do angular vem 
// em primeiro lugar 
import { FiltroArrayPipe } from './filtro-array.pipe';
@Pipe({
  name: 'filtroArrayImpuro',
  pure: false
})
export class FiltroArrayImpuroPipe extends FiltroArrayPipe {

  
}
