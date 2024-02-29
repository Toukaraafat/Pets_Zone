import { Component, ElementRef, ViewChild , AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements AfterViewInit{
  @ViewChild('myVideo') myVideo!: ElementRef;
  ngAfterViewInit() {
    const videoElement = this.myVideo.nativeElement as HTMLVideoElement;
    videoElement.volume = 0;
    videoElement.playbackRate = 1.4;

  }
}
