export class Torneo {
    id?: number;  // El id puede ser opcional, ya que al crear un nuevo torneo no tendrá un id
    nombre!: string;
    juego!: string;
    estado!: string;
    numEquipos!: number;
    fechaInicio!: string;
    imagen!: string;
  }
  