const Constants = require('../src/utils/Constants');
const Validation = require('../src/utils/validation');

it('Valido', () => {
    const result = Validation.create({
        nome: "Teste",
        email: "teste@gmail.com",
        senha: "123456789"
    });
    expect(result).toEqual(undefined);
});

it('Invalido - sem nome', () => {
    const result = Validation.create({
        email: "teste@gmail.com",
        senha: "123456789"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});
