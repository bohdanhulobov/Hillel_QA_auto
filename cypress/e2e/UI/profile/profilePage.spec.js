/// <reference types="cypress" />

import profilePage from '../../POM/pages/profile.page'
import headerSection from '../../POM/sections/header.section'

describe('Profile page test', () => {
    it('The profile image should be uploaded and updated', () => {
        cy.login(Cypress.env('email'), Cypress.env('password'), false)

        headerSection.myProfileDropdown.click()
        headerSection.profileButton.click()

        profilePage.editProfileButton.click()
        profilePage.photoInput.selectFile('cypress/fixtures/media/gar1.png')

        cy.intercept('PUT', '/api/users/profile').as('profileUpdateRequest')

        profilePage.saveButton.click()
        cy.get('@profileUpdateRequest')
            .its('response')
            .then((response) => {
                console.log(response)
                expect(response.body.data.photoFilename)
                    .not.eq(null)
                    .and.not.eq(undefined)
                expect(response.statusCode).eq(200)
            })

        profilePage.successPopup.should(
            'contain',
            'User profile has been updated'
        )
    })
})
