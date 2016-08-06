/**
 * Created by DloveY on 16/8/5.
 */
Template.modal2.events({
    'click .zhucece': function(event) {
        event.preventDefault();

        var steamUser = {
            userName: $('form').find('[name="userName"]').val(),
            passWord: $('form').find('[name="passWord"]').val(),
            tel: $('form').find('[name="tel"]').val(),
            weiXin: $('form').find('[name="weiXin"]').val(),
            entryTime: $('form').find('[name="entryTime"]').val(),
            department: $('form').find('[name="department"]').val(),
            
        };
        // console.log(JSON.stringify(steamUser))
        SteamUsers.insert(steamUser);

    }

});
