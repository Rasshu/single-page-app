import { Directive, ElementRef, OnInit, Renderer2,HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit  {

  constructor(private element:ElementRef,private renderer:Renderer2) {
    console.log(element);
    
   }

   ngOnInit():void{
     //this.renderer.setStyle(this.element.nativeElement.selector,'red')
    // this.renderer.setStyle(this.element,"color","red");
     this.renderer.setStyle(this.element.nativeElement,'color','red');
   }

   @HostListener("mouseover")onMouseMove(){
      console.log("event capture");
   }
  
}
