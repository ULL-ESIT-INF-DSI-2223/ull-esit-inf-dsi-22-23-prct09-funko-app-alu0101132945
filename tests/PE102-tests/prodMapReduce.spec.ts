import 'mocha';
import {expect} from 'chai';
import {ProdMapReduce} from '../../src/ej-PE102/prodMapReduce.js'

describe('ProdMapReduce methods tests', () => {
    it('run test', () => {
        const list = new ProdMapReduce([1,2,3,4,5])
        expect(list.run(n => n)).to.be.equal(120);
        expect(list.run(n => n+2)).to.be.equal(2520);    
    });
    it('set test', () => {
        const list = new ProdMapReduce([5,4,3,2,1])
        expect(list.run(n => n)).to.be.equal(120);
        list.setNumeros([9,8,7,6])
        expect(list.run(n => n)).to.be.equal(3024);    
    });
});