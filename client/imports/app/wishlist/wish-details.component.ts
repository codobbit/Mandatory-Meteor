import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, CanActivate} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import 'rxjs/add/operator/map';

import template from './wish-details.component.html';
import {Wish} from "../../../../both/models/wish.model";
import {Wishlist} from "../../../../both/collections/wishlist.collections";

@Component({
    selector: 'wish-details',
    template
})

export class WishDetailsComponent implements OnInit, OnDestroy, CanActivate{
    wishId: string;
    paramsSub: Subscription;
    wish: Wish

    constructor(
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.paramsSub = this.route.params.map(params => params['wishId'])
            .subscribe(wishId => {this.wishId = wishId;
        this.wish = Wishlist.findOne(this.wishId)});

    }

    saveWish() {
        Wishlist.update(this.wish._id, {
            $set: {
                name: this.wish.title
            }
        });
    }
    canActivate() {
        const wish = Wishlist.findOne(this.wishId);
        return (wish && wish.owner == Meteor.userId());
    }


    ngOnDestroy() {
        this.paramsSub.unsubscribe();
    }
}
