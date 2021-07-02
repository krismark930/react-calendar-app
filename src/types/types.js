const types = {

    // UI
    uiOpenModal: '[ui] Open modal',
    uiCloseModal: '[ui] Close modal',

    // Calendar
    eventSetActive: '[event] Set Active',

    eventStartAddNew: '[event] Start add new',
    eventAddNew: '[event] Add new',
    eventClearActive: '[event] Clear Active',
    eventUpdated: '[event] Event updated',
    eventDeleted: '[event] Event deleted',

    // Auth
    authCheckingFinish: '[auth] Finish checking login state',
    authStartLogin: '[auth] Start login',
    authLogin: '[auth] Login',
    authStartRegister: '[auth] Start register',
    authStartTokenRenew: '[auth] Start token renewal',
    authLogout: '[auth] Logout'
}

export default types;