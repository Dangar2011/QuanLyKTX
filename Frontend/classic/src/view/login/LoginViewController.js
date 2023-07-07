Ext.define('AdminPage.view.login.LoginViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.LoginViewController',

    onShowPassword: function (button) {
        var passwordField = Ext.getCmp('password');
        var inputEl = passwordField.inputEl.dom;

        if (inputEl.getAttribute('type') === 'password') {
            inputEl.setAttribute('type', 'text');
            button.setIconCls('x-fa fa-eye-slash');
            button.setTooltip('Ẩn mật khẩu');
        } else {
            inputEl.setAttribute('type', 'password');
            button.setIconCls('x-fa fa-eye');
            button.setTooltip('Hiển thị mật khẩu');
        }
    },

    onLoginClick: function () {
        console.log('aaaaaaaa');
    },

    initKeyMappings: function() {
        Ext.getBody().on('keydown', this.onKeyDown, this);
    },
    
    onKeyDown: function(event) {
        if (event.getKey() === event.ENTER) {
            var form = this.lookupReference('form');
            if (form.isValid()) {
                this.onLoginClick();
            }
        }
    },
});