import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	template: `	
    <header id="topNav">
			<div class="container">
				<!-- Mobile Menu Button -->
				<button class="btn btn-mobile" data-toggle="collapse" data-target=".nav-main-collapse">
							<i class="fa fa-bars"></i>
				</button>
				<!-- Logo -->
				<a class="logo pull-left scrollTo" routerLink="/">
					<img src="assets/get_logo.png" alt="" />
				</a>
				<div class="navbar-collapse pull-right nav-main-collapse collapse submenu-dark">
							<nav class="nav-main">

								<!--
									NOTE
									
									For a regular link, remove "dropdown" class from LI tag and "dropdown-toggle" class from the href.
									Direct Link Example: 

									<li>
										<a href="#">HOME</a>
									</li>
								-->
								<ul id="topMain" class="nav nav-pills nav-main">
									<li>
										<a routerLink="/">
											HOME
										</a>
									</li>
									<li>
										<a routerLink="/stats">
											STATS
										</a>
									</li>
								</ul>
							</nav>
						</div>
			</div>
		</header>
  `
})
export class HeaderComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

}
