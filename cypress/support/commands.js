Cypress.Commands.add('setToken', function(){
    cy.api({
        method: 'POST',
        url: '/sessions',
        body: {
            email: 'renan@gmail.com',
            password: 'qa-cademy'
        }
    }).then(function(response){
        expect(response.status).to.eql(200)
        Cypress.env('token', response.body.token)
    })
})

Cypress.Commands.add('back2ThePast', function(){
    cy.api({
        method: 'DELETE',
        url: '/back2thepast/62b2ffb6d616380016d8c705'
    }).then(function(response){
        expect(response.status).to.eql(200)
    })
})

Cypress.Commands.add('postCharacter', function(Payload){
    cy.api({
        method: 'POST',
        url: '/characters',
        body: Payload,
        headers: {
            Authorization: Cypress.env('token')
        },
        failOnStatusCode: false
    }).then(function(response){
        return response
    })
})

Cypress.Commands.add('getCharacter', function(){
    cy.api({
        method: 'GET',
        url: '/characters',
        headers: {
            Authorization: Cypress.env('token')
        },
        failOnStatusCode: false
    }).then(function(response){
        return response
    })
})

Cypress.Commands.add('getCharacterById', function(characterId){
    cy.api({
        method: 'GET',
        url: '/characters/' + characterId,
        headers: {
            Authorization: Cypress.env('token')
        },
        failOnStatusCode: false
    }).then(function(response){
        return response
    })
})

Cypress.Commands.add('deleteCharacterById', function(characterId){
    cy.api({
        method: 'DELETE',
        url: '/characters/' + characterId,
        headers: {
            Authorization: Cypress.env('token')
        },
        failOnStatusCode: false
    }).then(function(response){
        return response
    })
})

Cypress.Commands.add('populateCharacters', function(characters){

    characters.forEach(function(c){
        cy.postCharacter(c)
    })

})

Cypress.Commands.add('searchCharacter', function(characterName){
    cy.api({
        method: 'GET',
        url: '/characters',
        qs: {name: characterName},
        headers: {
            Authorization: Cypress.env('token')
        },
        failOnStatusCode: false
    }).then(function(response){
        return response
    })
})

