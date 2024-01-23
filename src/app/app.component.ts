import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as THEOplayer from 'theoplayer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  AfterViewInit {
  title = 'theo650';
  @ViewChild('playerRef') playerElementRef!: ElementRef;


  ngAfterViewInit(): void {
    const player = new THEOplayer.Player(this.playerElementRef.nativeElement, {});
  }

}
