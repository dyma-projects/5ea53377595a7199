import { Directive, HostListener, ElementRef , Renderer2} from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {


  @HostListener('window:keydown', ['$event']) windowClick($event) {
    console.log($event);

    let color ;

    switch($event.code){
      case "ArrowUp":{
        color="blue";
        break;
      }
      case "ArrowDown":{
        color="red";
        break;
      }
      case "ArrowLeft":{
        color="green";
        break;
      }
      default:case "ArrowRight":{
        color="yellow";
        break;
      }
    }

    this.renderer.setStyle(this.el.nativeElement,"background-color",color)
    this.el.nativeElement
  }

  constructor(private el: ElementRef, private renderer:Renderer2) {}

}

