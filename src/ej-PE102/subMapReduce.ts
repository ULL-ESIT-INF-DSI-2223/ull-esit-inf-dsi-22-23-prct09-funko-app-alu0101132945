import { TemplateMapReduce } from "./baseclass";

export class SubMapReduce extends TemplateMapReduce{
    /**
     * implementacion del metodo abstracto reduce
     * @param acc valor acumulado
     * @param curr valor actual
     * @returns la resta de ambos valores
     */
    reduce(acc: number, curr: number): number {
        return acc - curr;
    }
    /**
     * implementacion del metodo vacio showResult
     * @param maplist lista sobre la que se hizo el map
     * @param valorFinal valor resultado del reduce
     */
    showResult(maplist: number[], valorFinal: number): void {
        console.log(`La resta de los elementos ${maplist} es ${valorFinal}`);
    }
}