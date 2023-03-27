import 'mocha';
import {expect} from 'chai';
import {SubMapReduce} from '../src/ej-PE102/subMapReduce'

describe('SubMapReduce methods tests', () => {
    it('run test', () => {
        const list = new SubMapReduce([5,4,3,2,1])
        expect(list.run(n => n)).to.be.equal(-5);
        expect(list.run(n => n+2)).to.be.equal(-11);    
    });
    it('set test', () => {
        const list = new SubMapReduce([5,4,3,2,1])
        expect(list.run(n => n)).to.be.equal(-5);
        list.setNumeros([9,8,7,6])
        expect(list.run(n => n)).to.be.equal(-12);    
    });
});