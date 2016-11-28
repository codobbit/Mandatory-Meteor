import { Meteor } from 'meteor/meteor';

import {loadWishlist} from './imports/fixtures/wishlist';

Meteor.startup(() => {
    loadWishlist();
});