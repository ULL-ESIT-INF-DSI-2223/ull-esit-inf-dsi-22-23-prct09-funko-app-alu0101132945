[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-alu0101132945/badge.svg?branch=master)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-alu0101132945?branch=master)

# Práctica 9 - Aplicación de registro de Funko Pops

En esta práctica, tendrá que implementar una aplicación que permita almacenar información de los Funko Pops pertenecientes a la colección de un usuario. En concreto, el sistema permitirá añadir, modificar, eliminar, listar y leer la información asociada a un Funko. La información de cada Funko se almacenará como un JSON en el sistema de ficheros de la máquina donde se ejecute la aplicación. Además, solo se podrá interactuar con la aplicación desde la línea de comandos (no existirá un menú interactivo).

Todo el código desarrollado esta alojado en el repositorio generado tras la aceptación de la asignación de GitHub Classroom. https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct09-funko-app-alu0101132945.git

## Aplicacion

Los requisitos que debe cumplir la aplicación son los siguientes:

1. La aplicación deberá permitir que múltiples usuarios interactúen con ella, pero no simultáneamente.

2. En concreto, un Funko vendrá descrito por los siguientes elementos mínimos de información que deberán ser almacenados:

 + ID. Debe ser un identificador único del Funko.
 + Nombre. Debe ser una cadena de caracteres.
 + Descripción. Debe ser una cadena de caracteres.
 + Tipo. Debe ser un enumerado con valores como, por ejemplo, Pop!, Pop! Rides, Vynil Soda o Vynil Gold, entre otros.
 + Género. Debe ser un enumerado con valores como, por ejemplo, Animación, Películas y TV, Videojuegos, Deportes, Música o Ánime, entre otras.
 + Franquicia. Debe ser una cadena de caracteres como, por ejemplo, The Big Bang Theory, Game of Thrones, Sonic The Hedgehog o Marvel: Guardians of the Galaxy, entre otras.
 + Número. Debe ser el número identificativo del Funko dentro de la franquicia correspondiente.
 + Exclusivo. Debe ser un valor booleano, esto es, verdadero en el caso de que el Funko sea exclusivo o falso en caso contrario.
 + Características especiales. Debe ser una cadena de caracteres que indique las característica especiales del Funko como, por ejemplo, si brilla en la oscuridad o si su cabeza balancea.
 + Valor de mercado. Debe ser un valor numérico positivo.


para poder guardar esta información, se crea una interfaz __FunkoPOP__ que definira los metodos que contiene el funko y una clase __Funko__ que guardara la informacion indicada mas arriba, usando ademas dos enums definidos previamente, de un Funko ademas de desarrollar los metodos definidos en la interfaz. los metodos que se definen son getter de la informacion guardada.

### Funko
```typescript
export enum FunkoTipo {
    p  = 'Pop!',
    pr = 'Pop! Rides',
    vs = 'Vynil Soda',
    vg = 'Vynil Gold',
    pc = 'Pop! Chrome'
}

export enum FunkoGen{
    a  = 'Animacion',
    pt = 'Peliculas y TV',
    v  = 'Videojuegos',
    d  = 'Deportes',
    m  = 'Musica',
}

interface FunkoPOP{
    getID():number;
    getName():string;
    getDesc():string;
    getTipo():FunkoTipo;
    getGen():FunkoGen;
    getFran():string;
    getNum():number;
    getExc():boolean;
    getEsp():string;
    getVal():number;
}

export class Funko implements FunkoPOP{
    constructor(private id:number, private name:string,private descripcion:string,private tipo:FunkoTipo, private genero:FunkoGen,private franquicia:string,private numero:number,private exclusivo:boolean,private especial:string,private valor:number){}
    getID(){return this.id}
    getName(){return this.name}
    getDesc(){return this.descripcion}
    getTipo(){return this.tipo}
    getGen(){return this.genero}
    getFran(){return this.franquicia}
    getNum(){return this.numero}
    getExc(){return this.exclusivo}
    getEsp(){return this.especial}
    getVal(){return this.valor}
}
```

3. Cada usuario tendrá su propia lista de Funko Pops, con la que podrá llevar a cabo las siguientes operaciones:

 + Añadir un Funko a la lista. Antes de añadir un Funko a la lista se debe comprobar si ya existe un Funko con el mismo ID. En caso de que así fuera, deberá mostrarse un mensaje de error por la consola. En caso contrario, se añadirá el nuevo Funko a la lista y se mostrará un mensaje informativo por la consola.

 + Modificar un Funko de la lista. Antes de modificar un Funko, previamente se debe comprobar si ya existe un Funko con el ID del Funko a modificar en la lista. Si existe, se procede a su modificación y se emite un mensaje informativo por la consola. En caso contrario, debe mostrarse un mensaje de error por la consola.

 + Eliminar un Funko de la lista. Antes de eliminar un Funko, previamente se debe comprobar si existe un Funko con el ID del Funko a eliminar en la lista. Si existe, se procede a su eliminación y se emite un mensaje informativo por la consola. En caso contrario, debe mostrarse un mensaje de error por la consola.

 + Listar los Funkos existentes en una lista. En este caso, deberá mostrarse la información asociada a cada Funko existente en la lista por la consola. Además, deberá utilizar el paquete chalk para ello. Primero, deberá establecer rangos de valor de mercado. Luego, el valor de mercado de cada Funko deberá mostrarse con colores diferentes. Por ejemplo, para aquellos Funko con un valor de mercado elevado, dicho valor deberá mostrarse en color verde, mientras que para los de menor valor de mercado, dicho valor se mostrará con color rojo. Establezca, al menos, cuatro rangos de valor de mercado diferentes.

 + Mostrar la información de un Funko concreto existente en la lista. Antes de mostrar la información del Funko, se debe comprobar que en la lista existe un Funko cuyo ID sea el del Funko a mostrar. Si existe, se mostrará toda su información, incluyendo el color de su valor de mercado. Para ello, use el paquete chalk. En caso contrario, se mostrará un mensaje de error por la consola.

 + Todos los mensajes informativos se mostrarán con color verde, mientras que los mensajes de error se mostrarán con color rojo. Use el paquete chalk para ello.

 + Hacer persistente la lista de Funko de cada usuario. Aquí es donde entra en juego el uso de la API síncrona de Node.js para trabajar con el sistema de ficheros:

    - Guardar cada Funko de la lista en un fichero independiente con formato JSON. Los ficheros JSON correspondientes a los Funko de un usuario concreto deberán almacenarse en un directorio con el nombre de dicho usuario.

    - Cargar los Funko desde los diferentes ficheros con formato JSON almacenados en el directorio del usuario correspondiente.

Para esto creamos un almacenamiento de funkos __FunkoUserStorage__, que es una clase que va asociada a un usuario y crea un Map de funkos, que son los funkos del usuario, para poder hacer las operaciones arriba indicadas, y ademas para poder hacerlos persistente tiene el paquete fs instalado, creando ficheros .json para guardar los funkos de manera independientes unos de otros dentro de directorios con los nombres de usuario, quedando la clase de la siguiente manera:

### FunkoUserStorage
```typescript
export class FunkoUserStorage{ 
    private readonly userDir: string;
    private readonly funkomap: Map<number,Funko> = new Map();
    constructor(private readonly user:string){
        
        this.userDir = path.join('./','data',user);
        if(!fs.existsSync(this.userDir)){
            fs.mkdirSync(this.userDir,{recursive:true});
        }
        if(fs.existsSync(this.userDir) && fs.readdirSync(this.userDir).length != 0 && this.funkomap.size == 0){
            this.funkomap = this.funkoUpload();
        }
    }
    private funkoUpload(): Map<number, Funko> {
        let funkos = new Map<number, Funko>();
          // Verificar si el directorio existe, y crearlo si no existe
            if (!fs.existsSync(this.userDir)) {
                fs.mkdirSync(this.userDir);
            }

            const files = fs.readdirSync(this.userDir);
            files.forEach(file => {
                const filePath = path.join(this.userDir, file);
                const funkofile = fs.readFileSync(filePath,'utf-8')
                const funkodata= JSON.parse(funkofile)
                const funko : Funko = new Funko(funkodata.id,funkodata.name,funkodata.descripcion,funkodata.tipo,funkodata.genero,funkodata.franquicia,funkodata.numero,funkodata.exclusivo,funkodata.especial,funkodata.valor);
                funkos.set(funko.getID(),funko);
                
            });
        return funkos;
    }
    private funkoSave(funko:Funko):void{
        const filePath = path.join(this.userDir,`${funko.getName()}.json`);
        const funkoData = JSON.stringify(funko,null,2);
        fs.writeFileSync(filePath,funkoData,'utf-8');
    }
    private funkoDelete(funko:Funko):void{
        const filePath = path.join(this.userDir,`${funko.getName()}.json`);
        fs.unlinkSync(filePath);
    }
    private funkoColor(funko: Funko){
        if(funko.getVal() <= 30){
            return '#FF334F';
            
        }else if(funko.getVal() > 30 && funko.getVal() <= 70){
            return'#FFA833';
            
        }else if(funko.getVal() > 70 && funko.getVal() <= 100){
            return '#F6FF33';
        }else{
            return '#33FFF9';
        }
    }
    public getFunko(id:number):Funko | undefined{
        return this.funkomap.get(id);
    }
    public addFunko(funko:Funko):void{
        if(this.funkomap.has(funko.getID())){
            console.error(chalk.red(`El funko con ID ${funko.getID()} ya existe en la lista`));
        }else{
            this.funkomap.set(funko.getID(),funko);
            this.funkoSave(funko);
            console.log(chalk.green(`Funko con ID ${funko.getID()} añadido a la lista`));
        }
    }
    public updateFunko(funko: Funko):void{
        const id = funko.getID();

        const filedir = path.join(this.userDir,`${this.funkomap.get(id)?.getName()}.json`)
        if(!fs.existsSync(filedir)){
            console.error(chalk.red(`No se encontro ningun funko con ID ${funko.getID()} en la lista`))
        }else{
            const funkofile = fs.readFileSync(filedir,'utf-8')
            const funkodata= JSON.parse(funkofile)
            const funko2 : Funko = new Funko(funkodata.id,funkodata.name,funkodata.descripcion,funkodata.tipo,funkodata.genero,funkodata.franquicia,funkodata.numero,funkodata.exclusivo,funkodata.especial,funkodata.valor);
            this.funkoDelete(funko2);
            this.funkomap.delete(funko2.getID())    
            this.funkomap.set(id,funko);
            this.funkoSave(funko);
            console.log(chalk.green(`funko con ID ${funko.getID()} modificado en la lista`));
        }
    }
    public removeFunko(id:number):void{
        const funko = this.getFunko(id);
        if(funko){
            this.funkomap.delete(id);
            this.funkoDelete(funko);
            console.log(chalk.green(`funko con ID ${id} eliminado de la lista`))
        }else{
            console.error(chalk.red(`No se encontro ningun funko con ID ${id} en la lista`))
        }
    }
    public listFunko(){

        this.funkomap.forEach(funko => {
            console.log(`-------------------------------`)
            this.showFunko(funko.getID());
        });
    }
    public showFunko(id:number):void{
        const funko = this.getFunko(id);
        if (funko) {
            const color = this.funkoColor(funko);
            const info = chalk.hex(color)(`ID: ${funko.getID()}\n Nombre: ${funko.getName()}\n Descripcion: ${funko.getDesc()}\n Tipo: ${funko.getTipo()}\n Genero: ${funko.getGen()}\n Franquicia: ${funko.getFran()}\n Numero: ${funko.getNum()}\n Exclusivo: ${funko.getExc()}\n Especial: ${funko.getEsp()}\n Precio ${funko.getVal()}€`)
            console.log(info);
            
        } else {
            console.error(chalk`{red.bold No se encontró ningún Funko con ID ${id} en la lista.}`);
        }
    }
    public getMap(){return this.funkomap}
}
```

como se puede ver el metodo _listFunko_ en un for que ejecuta el metodo _showFunko_ para todos los funkos mientras que la funcionalidad del _showFunko_ hace una llamada al metodo privado _funkoColor_ que lo que hace es elegir un color segun el rango de precio del funko y luego se lo añade al metodo `chalk.hex()` para que toda la informacion del funko salga de ese color en la consola.

4. Un usuario solo puede interactuar con la aplicación a través de la línea de comandos. Los diferentes comandos, opciones de los mismos, así como manejadores asociados a cada uno de ellos deben gestionarse mediante el uso del paquete `yargs`.

en el fichero de la app se han creado los comandos para que el usuario interactue con la app.

### FunkoApp
```typescript
yargs(hideBin(process.argv))
    .command('add', 'Añadir un funko', {
    user: {
    description: 'Nombre de usuario',
    type: 'string',
    demandOption: true
    },
    id: {
    description: 'Funko ID',
    type: 'number',
    demandOption: true
    },
    name: {
        description: 'Funko Nombre',
        type: 'string',
        demandOption: true
    },
    desc: {
        description: 'Funko Descripcion',
        type: 'string',
        demandOption: true
    },
    type: {
        description: 'Funko Tipo',
        type: 'string',
        demandOption: true
    },
    gener: {
        description: 'Funko Genero',
        type: 'string',
        demandOption: true
    },
    franq: {
        description: 'Funko Franquicia',
        type: 'string',
        demandOption: true
    },
    num: {
        description: 'Funko Número Franquicia',
        type: 'number',
        demandOption: true
    },
    excl: {
        description: 'Funko Exclusivo',
        type: 'boolean',
        demandOption: true
    },
    esp: {
        description: 'Funko Caractericticas Especiales',
        type: 'string',
        demandOption: true
    },
    val: {
        description: 'Funko Valor Mercado',
        type: 'number',
        demandOption: true
    }

    }, (argv) => {
    let user: FunkoUserStorage = new FunkoUserStorage(argv.user);
    user.addFunko(new Funko(argv.id, argv.name, argv.desc,argv.type,argv.gener, argv.franq, argv.num, argv.excl, argv.esp, argv.val));
    })

    .command('update', 'actualiza un funko', {
        user: {
        description: 'Nombre de usuario',
        type: 'string',
        demandOption: true
        },
        id: {
        description: 'Funko ID',
        type: 'number',
        demandOption: true
        },
        name: {
            description: 'Funko Nombre',
            type: 'string',
            demandOption: true
        },
        desc: {
            description: 'Funko Descripcion',
            type: 'string',
            demandOption: true
        },
        type: {
            description: 'Funko Tipo',
            type: 'string',
            demandOption: true
        },
        gener: {
            description: 'Funko Genero',
            type: 'string',
            demandOption: true
        },
        franq: {
            description: 'Funko Franquicia',
            type: 'string',
            demandOption: true
        },
        num: {
            description: 'Funko Número Franquicia',
            type: 'number',
            demandOption: true
        },
        excl: {
            description: 'Funko Exclusivo',
            type: 'boolean',
            demandOption: true
        },
        esp: {
            description: 'Funko Caractericticas Especiales',
            type: 'string',
            demandOption: true
        },
        val: {
            description: 'Funko Valor Mercado',
            type: 'number',
            demandOption: true
        }
    
    }, (argv) => {
    const user = new FunkoUserStorage(argv.user);
    user.updateFunko(new Funko(argv.id, argv.name, argv.desc,argv.type,argv.gener, argv.franq, argv.num, argv.excl, argv.esp, argv.val));
    })

    .command('remove', 'borrar un funko', {
        user: {
        description: 'Nombre de usuario',
        type: 'string',
        demandOption: true
        },
        id: {
        description: 'Funko ID',
        type: 'number',
        demandOption: true
        },
    
    }, (argv) => {
    const user = new FunkoUserStorage(argv.user);
    user.removeFunko(argv.id);
    })

    .command('show', 'muestra un funko', {
        user: {
        description: 'Nombre de usuario',
        type: 'string',
        demandOption: true
        },
        id: {
        description: 'Funko ID',
        type: 'number',
        demandOption: true
        },
    
    }, (argv) => {
    const user = new FunkoUserStorage(argv.user);
    user.showFunko(argv.id);
    })



    .command('list', 'lista los funkos de un usuario', {
        user: {
        description: 'Nombre de usuario',
        type: 'string',
        demandOption: true
        }
    
    }, (argv) => {
    const user = new FunkoUserStorage(argv.user);
    user.listFunko();
    })

.help()
.argv
```    
implementando las funcionalidades indicadas en la clase __FunkoUserStorage__, usando el paquete yargs para gestionar la linea de comandos y pasarle los parametros de los metodos a la clase.

