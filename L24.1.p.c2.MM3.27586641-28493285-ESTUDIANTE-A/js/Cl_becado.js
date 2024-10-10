import Cl_estudiante from "./Cl_estudiante.js";

export default class Cl_becado extends Cl_estudiante{
    constructor(nombre, notas, materias, beca){
        super(nombre, notas, materias);
        this.beca = beca;
    }

    montobeca(){
        if (this.notas > 15)
            return this.beca * 30
        
        else
        if (this.notas == 10) 
            return this.beca * 20
        
        else
        (this.notas < 10)
            return "no recibe beca"
    }
}