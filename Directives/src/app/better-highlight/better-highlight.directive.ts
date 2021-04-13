import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highLightColor: string = 'brown';
	@HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  	// this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'brown');
  }

  // HostListener reacting to any events
  @HostListener('mouseenter') mouseover(eventData: Event) {
		//this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'brown');
		this.backgroundColor = this.highLightColor;
	}
 @HostListener('mouseleave') mouseleave(eventData: Event) {
	//this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
	this.backgroundColor = this.defaultColor;
}

}
