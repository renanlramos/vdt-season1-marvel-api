describe('DELETE /characters/id', function () {

    before(function () {

        cy.setToken()
        cy.back2ThePast()

    })


    const tochaHumana = {
        name: 'Jhonny Storm',
        alias: 'Tocha Humana',
        team: ['Quarteto Fantastico'],
        active: true
    }

    context('quando tenho um personagem cadastrado', function(){

        before(function(){
            cy.postCharacter(tochaHumana).then(function(response){
                Cypress.env('characterId', response.body.character_id)
            })
        })

        it('deve remover o personagem pelo id', function(){

            const id = Cypress.env('characterId')
            cy.deleteCharacterById(id).then(function(response){
                expect(response.status).to.eql(204)
            })
        })

        after(function(){
            const id = Cypress.env('characterId')
            cy.getCharacterById(id).then(function(response){
                expect(response.status).to.eql(404)
            })
        })

        it('deve retornar 404 ao remover por id não cadastrado', function(){
            const id = '62b34ed0f53e3b0cf100a4b9'
            cy.deleteCharacterById(id).then(function(response){
                expect(response.status).to.eql(404)

            })
        })

    })

})