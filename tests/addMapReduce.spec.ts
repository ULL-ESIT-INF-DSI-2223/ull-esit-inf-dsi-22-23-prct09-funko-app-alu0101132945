import 'mocha';
import {expect} from 'chai';
import {AddMapReduce} from '../src/ej-PE102/addMapReduce'

describe('AddMapReduce methods tests', () => {
    it('run test', () => {
        const list = new AddMapReduce([1,2,3,4,5])
        expect(list.run(n => n)).to.be.equal(15);
        expect(list.run(n => n+2)).to.be.equal(25);    
    });
    it('set test', () => {
        const list = new AddMapReduce([1,2,3,4,5])
        expect(list.run(n => n)).to.be.equal(15);
        list.setNumeros([6,7,8,9])
        expect(list.run(n => n)).to.be.equal(30);    
    });
});