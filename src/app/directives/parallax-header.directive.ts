import { Directive, ElementRef, Renderer } from '@angular/core';
import { DomController } from '@ionic/angular';
 
// https://www.joshmorony.com/high-performance-parallax-animation-in-ionic-2/
@Directive({
  selector: '[parallax-header]',
  host: {
    '(ionScroll)': 'onContentScroll($event)',
    '(window:resize)': 'onWindowResize($event)'
  }
})
export class ParallaxHeaderDirective {
 
    header: any;
    productText: any;
    productCondition: any;
    headerHeight: any;
    translateAmt: any;
    scaleAmt: any;
 
    constructor(public element: ElementRef, public renderer: Renderer, private domCtrl: DomController){
 
    }
 
    ngOnInit(){
      let content = this.element.nativeElement;
        this.header = content.getElementsByClassName('header-image')[0];
        let mainContent = content.getElementsByClassName('main-content')[0];
        this.headerHeight = this.header.clientHeight;
        this.renderer.setElementStyle(mainContent, 'position', 'absolute');
    }
 
    onWindowResize(ev){      
        this.headerHeight = this.header.clientHeight;
    }
 
    onContentScroll(ev){
      if (ev) {
        this.domCtrl.write(() => {
          this.updateParallaxHeader(ev);
        });
      }
    }
 
    updateParallaxHeader(ev){
      let scrollTop = ev.detail.scrollTop;

        if (scrollTop > 0) {
            this.translateAmt = scrollTop / 2;
            this.scaleAmt = 1;
        } else {
            this.translateAmt = 0;
            this.scaleAmt = -scrollTop / this.headerHeight + 1;
        }

        this.renderer.setElementStyle(this.header, 'webkitTransform', 'translate3d(0,'+this.translateAmt+'px,0) scale('+this.scaleAmt+','+this.scaleAmt+')');
    }
 
}