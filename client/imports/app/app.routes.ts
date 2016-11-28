import { Route } from '@angular/router';
import { Meteor } from 'meteor/meteor';

import { WishlistListComponent } from './wishlist/wishlist-list.component';
import {WishDetailsComponent} from "./wishlist/wish-details.component";

export const routes: Route[] = [
    { path: '', component: WishlistListComponent },
    { path: 'wish/:wishId', component: WishDetailsComponent, canActivate: ['canActivateForLoggedIn'] },
];

export const ROUTES_PROVIDERS = [{
    provide: 'canActivateForLoggedIn',
    useValue: () => !! Meteor.userId()
}];