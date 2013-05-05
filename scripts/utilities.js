function showPopover(popoverId, toolbarItemId) {
    var toolbarItem = safari.extension.toolbarItems.filter(function (tbi) {
        return tbi.identifier == toolbarItemId && tbi.browserWindow == safari.application.activeBrowserWindow;
    })[0];
    var popover = safari.extension.popovers.filter(function (po) {
        return po.identifier == popoverId;
    })[0];
    toolbarItem.popover = popover;
    toolbarItem.showPopover();  
}

function startupTasks() {
    // Open the database
    db = openDatabase();
    if (db != null) {
        // Initialize the tables if necessary
        createTables(db);
    }
}

