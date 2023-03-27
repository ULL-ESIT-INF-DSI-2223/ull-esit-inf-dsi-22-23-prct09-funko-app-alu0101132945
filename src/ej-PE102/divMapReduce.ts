import { TemplateMapReduce } from "./baseclass";

export class DivMapReduce extends TemplateMapReduce{
    /**
     * implementacion del metodo abstracto reduce
     * @param acc valor acumulado
     * @param curr valor actual
     * @returns la division de ambos valores
     */
    protected reduce(acc: number, curr: number): number {
        return acc / curr;
    }
    /**
     * implementacion del metodo vacio showResult
     * @param maplist lista sobre la que se hizo el map
     * @param valorFinal valor resultado del reduce
     */
    protected showResult(maplist: number[], valorFinal: number): void {
        console.log(`La division de los elementos ${maplist} es ${valorFinal}`);
    }
}