/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'AdminPage.Application',

    name: 'AdminPage',

    requires: [
        // This will automatically load all classes in the AdminPage namespace
        // so that application classes do not need to require each other.
        'AdminPage.*'
    ]
});