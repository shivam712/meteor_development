import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

if (Meteor.isClient){
	var img_data=[
	{
		img_src:"taylor.jpg",
		img_alt:"some taylor photo"
	},
	{
		img_src:"taylor1.jpg",
		img_alt:"some taylor1 photo"
	},
	{
		img_src:"taylor2.jpg",
		img_alt:"some taylor2 photo"
	}
	];
	Template.images.helpers({images:img_data})
}