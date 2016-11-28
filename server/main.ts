import { Meteor } from 'meteor/meteor';
import {loadWishlist} from './imports/fixtures/wishlist';
import './imports/publications/wishlists';


Meteor.startup(() => {
    loadWishlist();
});