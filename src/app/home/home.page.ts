import { Component, OnInit } from '@angular/core';
import { Capacitor, FilesystemDirectory, FilesystemEncoding, Plugins } from '@capacitor/core';

const { Filesystem } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  src = '';

  constructor() { }

  async ngOnInit() {
    const result = await Filesystem.writeFile({
      data: 'iVBORw0KGgoAAAANSUhEUgAAAAYAAAAECAYAAACtBE5DAAAABHNCSVQICAgIfAhkiAAAABl0RVh0U29mdHdhcmUAZ25vbWUtc2NyZWVuc2hvdO8Dvz4AAAA9aVRYdENyZWF0aW9uIFRpbWUAAAAAADIwMjDlubTlhavmnIgzMeaXpSAo6YCx5LiAKSAyM+aZgjI35YiGMjTnp5IACi9UAAAASElEQVQImWOUk5P7z4AFsEAoSQa/kGYGu2ezGbazuzP4K8jBJBgYGBjYGETVwxiszi9gaDp0A1mCgYHh7U6G6RcuM7xhYGAAAEFTDx/VUsAUAAAAAElFTkSuQmCC',
      directory: FilesystemDirectory.Data,
      path: 'demo',
      recursive: true,
      encoding: FilesystemEncoding.UTF8
    });
    this.src = Capacitor.convertFileSrc(result.uri);
  }
}
