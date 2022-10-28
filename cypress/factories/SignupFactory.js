
var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function(){

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()
         

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '777777777',
            address:{
                postalcode:'04466070',
                street:'Rua Catharina Marrone',
                number:'1000',
                details: 'Ap 154',
                district: 'Jardim Itapura',
                city_state: 'São Paulo/SP'
            },
            deliver_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data
    }

}