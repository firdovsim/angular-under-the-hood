import { Component } from "../../framework";

class AppHeader extends Component {

}

export const appHeader = new AppHeader({
	selector: 'app-header',
	template: `
		<nav class="indigo">
			<div class="nav-wrapper">
				<a href="#" class="brand-logo">Logo</a>
				<ul class="right hide-on-med-and-down">
					<li><a href="#">Vue</a></li>
					<li><a href="#">React</a></li>
				</ul>
			</div>
		</nav>
	`
})