/**
 * Created by DloveY on 16/8/9.
 */
// Meteor.publish('weiXin', function() {
//     return Meteor.users.find(this.userId).weiXin
//     // return  Meteor.users.findOne({_id : Meteor.user()._id}).weiXin;
//     // Meteor.user().weiXin;
//     // console.log(Meteor.user().weiXin)
// });

Meteor.publish("AllUsers",function () {
    var a = Meteor.users.findOne({_id:Meteor.userId()})
    console.log(a)
    // return Meteor.user().weiXin
    return a.weiXin
})

// Meteor.publish("steamUsers",function () {
//     return SteamUsersteamUsers.find()
// })