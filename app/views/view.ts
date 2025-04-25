export class View {

    // O modificador de acesso protected permite que a propriedade seja acessada apenas dentro da classe e em classes que herdam dela.
    protected elemento: HTMLElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }
}