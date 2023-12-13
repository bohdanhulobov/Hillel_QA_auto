class ProfilePage {
    get editProfileButton() {
        return cy.get('.panel-page_heading > .btn')
    }

    get photoInput() {
        return cy.get('input#editProfilePhoto')
    }

    get saveButton() {
        return cy.get('.modal-footer > .btn')
    }

    get successPopup() {
        return cy.get('.alert-success')
    }
}

export default new ProfilePage()
