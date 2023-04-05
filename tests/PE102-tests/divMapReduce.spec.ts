import 'mocha';
import {expect} from 'chai';
import {DivMapReduce} from '../../src/ej-PE102/divMapReduce.js'

describe('DivMapReduce methods tests', () => {
    it('run test', () => {
        const list = new DivMapReduce([5,4,3,2,1])
        expect(list.run(n => n)).to.be.equal(0.20833333333333334);
        expect(list.run(n => n+2)).to.be.equal(0.019444444444444445);    
    });
    it('set test', () => {
        const list = new DivMapReduce([5,4,3,2,1])
        expect(list.run(n => n)).to.be.equal(0.20833333333333334);
        list.setNumeros([9,8,7,6])
        expect(list.run(n => n)).to.be.equal(0.026785714285714288);    
    });
});