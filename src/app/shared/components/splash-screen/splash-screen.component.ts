import {
  Component,
  DestroyRef,
  inject,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { NgIf } from '@angular/common';

export enum SplashAnimationType {
  SlideLeft = 'slide-left',
  SlideRight = 'slide-right',
  FadeOut = 'fade-out',
}

@Component({
  standalone: true,
  selector: 'splash-screen',
  template: `
    @if (showSplash) {
    <div
      class="app-splash-screen"
      [style]="{
        left: windowWidth,
        opacity: opacityChange,
        transition: splashTransition
      }"
    >
      <div id="ctn_splash_screen" class="app-splash-inner">
        <div id="img_splash_screen_logo" class="app-logo"></div>
        @if (showError) {
        <div class="app-label">
          {{ error }}
        </div>
        } @else {
        <span
          nz-icon
          nzType="loading"
          nzTheme="outline"
          style="font-size: 26px;"
        ></span>
        }
      </div>
    </div>
    }
  `,
  styleUrls: ['./splash-screen.component.css'],
  imports: [NgIf],
})
export class SplashScreenComponent implements OnInit, OnChanges {
  protected readonly destroy = inject(DestroyRef);

  private timeouts: any[] = [];
  protected windowWidth: string = '';
  protected splashTransition: string = '';
  protected opacityChange: number = 1;

  @Input() animationDuration: number = 0.5;
  @Input() duration: number = 0;
  @Input() animationType: SplashAnimationType = SplashAnimationType.FadeOut;
  @Input() showSplash: boolean = true;
  @Input() showError = false;
  @Input() error = '';

  constructor() {
    this.destroy.onDestroy(() => {
      this.timeouts.forEach((timeout) => clearTimeout(timeout));
      this.timeouts = [];
    });
  }

  ngOnInit(): void {
    this.setupAnimation();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['showSplash']) {
      this.setupAnimation();
    }
  }

  private readonly setupAnimation = (): void => {
    if (!this.showSplash) {
      let transitionStyle = '';
      switch (this.animationType) {
        case SplashAnimationType.SlideLeft:
          this.windowWidth = `-${window.innerWidth}px`;
          transitionStyle = `left ${this.animationDuration}s`;
          break;
        case SplashAnimationType.SlideRight:
          this.windowWidth = `${window.innerWidth}px`;
          transitionStyle = `left ${this.animationDuration}s`;
          break;
        case SplashAnimationType.FadeOut:
          transitionStyle = `opacity ${this.animationDuration}s`;
          this.opacityChange = 0;
      }

      this.splashTransition = transitionStyle;
    }
  };
}
