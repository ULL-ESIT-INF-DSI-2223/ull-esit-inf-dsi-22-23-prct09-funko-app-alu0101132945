export abstract class TemplateMapReduce{
    /**
     * constructor de la clase TemplateMapReduce
     * @param numeros lista de numeros sobre los que se van a hacer las operaciones de map y reduce
     */
    constructor(private numeros:number[]){}
    
    /**
     * metodo abstracto reduce que implementara la clase reduce
     * @param acumulador valor acumulado
     * @param valorActual valor sobre el que se va a operar
     */
    protected abstract reduce(acumulador:number,valorActual:number):number;
    
    /**
     * metodo map de la clase
     * @param funcion funcion que realiza el map
     * @returns una lista con los valores actualizados por la funcion
     */
    protected map(funcion: (numero: number) => number = (numero) => numero): number[] {
        const auxnums = [];
        for(const numero of this.numeros){
            auxnums.push(funcion(numero));
        }
        return auxnums;
    }

    /**
     * metodo que aplica el metodo abstracto sobre la lista
     * @param numeros lista sobre la que se aplica el reduce
     * @returns un valor resultado del reduce sobre la lista
     */
    protected reduceList(numeros:number[]): number{
        let acumulador = numeros[0];
        for(let numero = 1; numero < numeros.length; numero++){
            acumulador = this.reduce(acumulador,numeros[numero]);
        }
        return acumulador;
    }

    /**
     * metodo vacio que muestra el resultado de las operaciones de la clase
     * @param maplist lista resultado del map
     * @param valorFinal valor resultado del reduce
     */
    showResult(maplist:number[],valorFinal:number){}

    /**
     * metodo que ejecuta las operaciones de la clase
     * @param funcion funcion que se pasa al metodo map
     * @returns devuelve el resultado del map y el reduce
     */
    run(funcion: (numero: number) => number = (numero) => numero):number{
        const maplist = this.map(funcion);
        const valorReduc = this.reduceList(maplist);
        this.showResult(maplist,valorReduc);
        return valorReduc;
    }

    /**
     * metodo que cambia la lista por otra
     * @param list lista que va a sustituir a la de la clase
     */
    setNumeros(list:number[]){
        this.numeros = list;
    }
}