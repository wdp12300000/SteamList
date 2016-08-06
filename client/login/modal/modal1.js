/**
 * Created by DloveY on 16/8/6.
 */
Template.modal1.events({
    'click #closebutton':function (event) {
        event.preventDefault();
        
        console.log(JSON.stringify('登录成功'))   
    }
});