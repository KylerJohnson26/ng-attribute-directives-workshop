import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor(
    private elRef: ElementRef
  ) { }

  @HostListener('click') toggleDropdown() {
    const buttonEl = this.elRef.nativeElement;
    const isOpen = buttonEl.classList.contains('open');
    buttonEl.classList.toggle('open', !isOpen);
  }

}
