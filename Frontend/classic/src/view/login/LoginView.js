Ext.define('AdminPage.view.login.LoginView', {
    extend: 'Ext.panel.Panel',
    xtype: 'LoginView',

    controller: 'LoginViewController',
    viewModel: {
        type: 'LoginViewModel'
    },

    cls: 'login-view',
    id: 'login',

    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },

    plugins: 'viewport',

    items: [
        {
            xtype: 'panel',
            cls: 'login-content',
            width: '30%',
            maxWidth: 400,
            padding: '20 20',

            layout: {
                type: 'vbox',
                align: 'center',
                pack: 'center'
            },

            items: [
                {
                    xtype: 'label',
                    html: 'Login',

                    cls: 'login-text',
                    margin: '10 0 20 0',
                },
                {
                    xtype: 'form',
                    width: '100%',
                    layout: 'vbox',
                    reference: 'form',

                    items: [
                        {
                            xtype: 'textfield',
                            width: '100%',

                            name: 'username',
                            fieldLabel: 'Tên đăng nhập',
                            labelAlign: 'top',
                            emptyText: 'Tên đăng nhập',

                            allowBlank: false
                        },
                        {
                            cls: 'login-password-wrap',
                            width: '100%',

                            items: [
                                {
                                    xtype: 'textfield',
                                    width: '100%',

                                    id: 'password',
                                    name: 'password',
                                    inputType: 'password',
                                    fieldLabel: 'Mật khẩu',
                                    labelAlign: 'top',
                                    emptyText: 'Mật khẩu',

                                    allowBlank: false
                                },
                                {
                                    xtype: 'button',
                                    cls: 'show-password-button',
                                    iconCls: 'x-fa fa-eye',
                                    tooltip: 'Hiển thị mật khẩu',

                                    handler: 'onShowPassword'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'button',
                    text: 'Đăng nhập',
                    cls: 'login-button',
                    width: '100%',

                    handler: 'onLoginClick'
                }
            ]
        }
    ],

    listeners: {
        afterrender: 'initKeyMappings'
    }
});