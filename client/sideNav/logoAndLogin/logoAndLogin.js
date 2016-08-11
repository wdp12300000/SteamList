/**
 * Created by DloveY on 16/8/8.
 */
Template.logoAndLogin.helpers({
    wanshan : function () {
        Meteor.subscribe('AllUsers');
        // console.log(Meteor.users.findOne({_id : Meteor.user()._id}).weiXin)
        // console.log(Meteor.users.findOne({_id : Meteor.user()._id}))
        // console.log(JSON.stringify(Meteor.users.findOne({_id : Meteor.user()._id})))
        //console.log(Meteor.user().weiXin)
        // console.log(Meteor.subscribe('weiXin'))
        console.log(Meteor.user().weiXin)
        // if(Meteor.user().weiXin){
        //     return true
        // }
        // else {
        //     return false
        // }
    }
});