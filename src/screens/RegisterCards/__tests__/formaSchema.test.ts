import { schema } from '../registerCardFormSchema';

describe('registerCardFormSchema', () => {
    it('should return false if fields are empty', async () => {
        const result = await schema.isValid();
        expect(result).toBeFalsy();
    });

    it('should return no error if all fields are provided and valid', async () => {
        const data = { number_card: "5502091945142207", cvv: "576", name: "Luiz Ricardo", expiry: "12/25" }
        const result = await schema.validate(data);
        expect(result).toBeTruthy();
    });

    it('should return an error if number_card is not valid', async () => {
        let errorMessage = []
        const data = { number_card: '123456789012345', name: 'Luiz Ricardo', expiry: '12/23', cvv: '123' }
        await schema.validateAt('number_card', data).catch(error => {
            errorMessage = error.errors
        });
        expect(errorMessage[0]).toEqual('Insira um cartão válido');
    });

    it('should return an error if name is not provided', async () => {
        let errorMessage = []
        const data = { number_card: '123456789012345', expiry: '12/23', cvv: '123' }
        await schema.validateAt('name', data).catch(error => {
            errorMessage = error.errors
        });
        expect(errorMessage[0]).toEqual('Insira um nome');
    });

    it('should return an error if name is not valid', async () => {
        let errorMessage = []
        const data = { number_card: '1234567890123456', name: 'J', expiry: '12/23', cvv: '123' };
        await schema.validateAt('name', data).catch(error => {
            errorMessage = error.errors
        });
        expect(errorMessage[0]).toEqual('Insira um nome válido');
    });

    it('should return an error if expiry is not provided', async () => {
        let errorMessage = []
        const data = { number_card: '1234567890123456', name: 'Luiz Ricardo', cvv: '123' };
        await schema.validateAt('expiry', data).catch(error => {
            errorMessage = error.errors
        });
        expect(errorMessage[0]).toEqual('É necessário o código de expiração');
    });

    it('should return an error if expiry is not valid', async () => {
        let errorMessage = []
        const data = { number_card: '1234567890123456', name: 'Luiz Ricardo', expiry: '12/20', cvv: '123' };
        await schema.validateAt('expiry', data).catch(error => {
            errorMessage = error.errors
        });
        expect(errorMessage[0]).toEqual('Data de expiração inválida');
    });

    it('should return an error if cvv is not provided', async () => {
        let errorMessage = []
        const data = { number_card: '1234567890123456', name: 'Luiz Ricardo', expiry: '12/23' };
        await schema.validateAt('cvv', data).catch(error => {
            errorMessage = error.errors
        });
        expect(errorMessage[0]).toEqual('Insira o CVV do cartão');
    });

    it('should return an error if cvv is not valid', async () => {
        let errorMessage = []
        const data = { number_card: '1234567890123456', name: 'Luiz Ricardo', expiry: '12/23', cvv: '12' };
        await schema.validateAt('cvv', data).catch(error => {
            errorMessage = error.errors
        });
        expect(errorMessage[0]).toEqual('Insira um CVV válido');
    });
});
