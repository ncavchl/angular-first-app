import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic  컴파일 후 실행가능한 js로 변환시켜줌 - 브라우저에서 동적으로 컴파일 한다
// AppModule 루트 모듈을 지정하여 이 애플리케이션을 실행시킴
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

// 실제 프로젝트의 main 시작점이 되는 파일
