import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { NavbarService } from './navbar.service';

@Component({
	selector: 'my-navbar',
	templateUrl: './navbar.component.html',
})

export class NavbarComponent implements OnInit {
    isIn: boolean = false; // store collapse state

    toggleState() { // click handler for collapse
        this.isIn === false ? this.openMenu() : this.collapseMenu(); 
    }
    collapseMenu() {
        this.isIn = false;
    }
    openMenu() {
        this.isIn = true;
    }

	constructor(private navbarService: NavbarService, private route: ActivatedRoute) {}

	ngOnInit() {}
}
