Ext.define('AdminPage.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'AdminPage.view.main.MainController',
        'AdminPage.view.main.MainModel'
    ],

    controller: 'main',
    viewModel: 'main',

    cls: 'main-view',
    layout: 'border',

    items: [
        {
            xtype: 'container',
            region: 'north',

            cls: 'main-header',
            height: sizeconstant.MAIN.HEIGHT_HEADER,
            layout: 'hbox',

            items: [
                {
                    xtype: 'container',
                    html: `<h1>Phần logo</h1>`,

                    height: '100%',
                    width: sizeconstant.MAIN.WIDTH_MENU_OPENED
                },
                {
                    xtype: 'container',
                    html: `<h1>Phần menu cấp 1</h1>`,

                    width: 300,
                    height: '100%',
                },
                {
                    flex: 1
                },
                {
                    xtype: 'container',
                    html: `<h1>Phần thông tin tài khoản</h1>`,
                    height: '100%',
                }
            ]
        },
        {
            xtype: 'container',
            region: 'west',
            reference: 'mainSidebar',

            cls: 'main-sidebar',
            layout: 'vbox',
            bind: {
                width: '{sidebarWidth}'
            },

            scrollable: 'y',

            items: [
                {
                    xtype: 'container',
                    cls: 'main-sidebar-title',
                    width: sizeconstant.MAIN.WIDTH_MENU_OPENED,
                    height: 50
                },
                {
                    xtype: 'treelist',
                    itemId: 'navigationTreeList',
                    reference: 'navigationTreeList',

                    ui: 'navigation',
                    cls: 'main-sidebar-content',
                    width: sizeconstant.MAIN.WIDTH_MENU_OPENED,
                    flex: 1,

                    expanderFirst: false,
                    expanderOnly: false
                }
            ]
        },
        {
            xtype: 'container',
            region: 'center',

            cls: 'main-center',
            reference: 'mainCenter',
            layout: 'vbox',

            items: [
                {
                    xtype: 'container',
                    itemId: 'headerBar',

                    cls: 'main-center-header',
                    height: 40,
                    width: '100%',
                    layout: 'hbox',

                    items: [
                        {
                            xtype: 'button',
                            id: 'main-navigation-btn',
                            reference: 'buttonToggleSidebar',

                            cls: 'icon-collapse',
                            iconCls: 'x-fa fa-chevron-left',
                            margin: 10,

                            handler: 'onToggleNavigationSize'
                        },
                        {
                            cls: 'list-breadscrumb',
                            bind: {
                                html: '{breadscrumbHtml}'
                            }
                        }
                    ]
                },
                {
                    xtype: 'container',
                    region: 'center',
                    reference: 'mainCardPanel',

                    cls: 'main-center-content',
                    width: '100%',
                    margin: 10,
                    flex: 1,
                    layout: {
                        type: 'card',
                        anchor: '100%'
                    },

                    scrollable: true
                }
            ]
        }
    ]
});