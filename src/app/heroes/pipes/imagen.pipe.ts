import { Pipe, PipeTransform } from '@angular/core';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { pipe } from 'rxjs';
import { Heroe } from '../interface/heroes.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(heroe: Heroe): string {
    if(!heroe.id && !heroe.alt_image){
      return 'assets/no-image.png';
    }
    else if(heroe.alt_image){
      return heroe.alt_image;
    }
    else{
      return `assets/heroes/${heroe.id}.jpg`;
    }    
  }
}
