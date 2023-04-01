import { NgModule } from "../framework";
import { appComponent } from "./app.component";
import { appHeader } from "./common/app.header";

class AppModule extends NgModule {

}

export const appModule = new AppModule({
	components: [
		appComponent,
		appHeader
	]
});