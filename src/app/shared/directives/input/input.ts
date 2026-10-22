import { Directive } from '@angular/core';

@Directive({
  selector: '[appInput]',
  host: {
    class: 'w-full outline-none text-text text-sm',
  },
})
export class Input {}
