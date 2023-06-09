import { Component } from "../framework";

class AppComponent extends Component {

}

export const appComponent = new AppComponent({
	selector: 'app-root',
	template: `
		<div>
			<app-header></app-header>
			
			<div class="row">
				<div class="col s6 offset-s3">
					<div class="card blue-grey darken-1">
						<div class="card-content white-text">
							<span class="card-title">Card Title</span>
							<p>I am a very simple card. I am good at containing small bits of information</p>
						</div>
						<div class="card-action">
							<a href="#">This is a link</a>
							<a href="#">This is a link</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	`
})