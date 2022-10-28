import SignupPage from '../pages/SignupPage'
import singnupFactory from '../factories/SignupFactory'

describe('Signup', function () {

    it('User should be deliver', function (){
        var deliver = singnupFactory.deliver()
        
        SignupPage.go()
        SignupPage.fillForm(deliver)
        SignupPage.submit()
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        SignupPage.modalContentShouldBe(expectedMessage)
    })

    it('Incorrect document', function () {

        var deliver = singnupFactory.deliver()
        deliver.cpf = '480.229.878-aa'


        SignupPage.go()
        SignupPage.fillForm(deliver)
        SignupPage.submit()
        SignupPage.alertMessageShouldBe('Oops! CPF inválido')

    })

    it('Incorrect email', function () {

        var deliver = singnupFactory.deliver()
        deliver.email = 'teste.teste.com'

        SignupPage.go()
        SignupPage.fillForm(deliver)
        SignupPage.submit()
        SignupPage.alertMessageShouldBe('Oops! Email com formato inválido.')

    })

    context('Required fields', function () {

        const messages = [
            { field: 'name', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o email' },
            { field: 'postalcode', output: 'É necessário informar o CEP' },
            { field: 'number', output: 'É necessário informar o número do endereço' },
            { field: 'deliver_method', output: 'Selecione o método de entrega' },
            { field: 'cnh', output: 'Adicione uma foto da sua CNH' }
       ]

       before( function () {
            SignupPage.go()
            SignupPage.submit()

        })

        messages.forEach(function (msg) {
            it(`${msg.field} is required`, function () {
               SignupPage.alertMessageShouldBe(msg.output)
            })
        })

    })

})