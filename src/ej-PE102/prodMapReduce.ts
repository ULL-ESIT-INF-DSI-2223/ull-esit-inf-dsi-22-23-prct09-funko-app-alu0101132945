import { TemplateMapReduce } from "./baseclass.js";

export class ProdMapReduce extends TemplateMapReduce{
    /**
     * implementacion del metodo abstracto reduce
     * @param acc valor acumulado
     * @param curr valor actual
     * @returns la multiplicacion de ambos valores
     */
    protected reduce(acc: number, curr: number): number {
        return acc * curr;
    }
    /**
     * implementacion del metodo vacio showResult
     * @param maplist lista sobre la que se hizo el map
     * @param valorFinal valor resultado del reduce
     */
    protected showResult(maplist: number[], valorFinal: number): void {
        console.log(`La multiplicacion de los elementos ${maplist} es ${valorFinal}`);
    }
}