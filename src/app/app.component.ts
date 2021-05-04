import { Component } from '@angular/core';
import { AppMinimize } from '@ionic-native/app-minimize/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private am: AppMinimize,
    private sb: StatusBar,
    private ss: SplashScreen,
    private plt: Platform
  ) {
    this.init();
  }

  public async init(): Promise<void> {
    await this.plt.ready();
    this.sb.styleDefault();
    this.ss.hide();
    this.plt.backButton.subscribeWithPriority(111, () => {
      console.log('back button pressed');
      this.am.minimize();
    });
  }
}
