class HeaderSection {
    get myProfileDropdown() {
        return cy.get('#userNavDropdown')
    }

    get profileButton() {
        return cy.get('a[routerlink="/panel/profile"]')
    }
}

export default new HeaderSection()
