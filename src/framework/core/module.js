export class Module {
	constructor(config) {
		this.components = config.components;
	}

	start() {
		this.loadComponents();
	}

	loadComponents() {
		this.components.forEach((c) => {
			c.render();
		})
	}
}