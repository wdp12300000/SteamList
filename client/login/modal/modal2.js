/**
 * Created by DloveY on 16/8/5.
 */
Template.modal2.events({
    'click .zhucece': function(event) {
        event.preventDefault();

        var wanShanUser = {
            userName: $('form').find('[name="userName"]').val(),
            passWord: $('form').find('[name="passWord"]').val(),
            tel: $('form').find('[name="tel"]').val(),
            weiXin: $('form').find('[name="weiXin"]').val(),
            entryTime: $('form').find('[name="entryTime"]').val(),
            department: $('form').find('[name="department"]').val(),
            
        };
        Meteor.user()
        // Meteor.steamUsers.find()
        // console.log(JSON.stringify(SteamUsers.findOne({"tel":"18641631818"}).weiXin))
        // 
        // users.findOne({'_id':'S2b5tuMBumokFtt2t'}).weiXin



    }

});
