import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CanActivate } from '@angular/router';

import { Wishlist } from '../../../../both/collections/wishlist.collections';
import { Wish } from '../../../../both/models/wish.model';

import template from './wishlist-list.component.html';

@Component({
    selector: 'wishlist-list',
    template
})
export class WishlistListComponent implements CanActivate{
    wishlist: Observable<Wish[]>;

    constructor() {
        this.wishlist = Wishlist.find({}).zone();
    }

    removeWish(wish: Wish): void {
        Wishlist.remove(wish._id);
    }
    canActivate() {
        const wish = Wishlist.findOne(this.wishId);
        return (wish && wish.owner == Meteor.userId());
    }

}