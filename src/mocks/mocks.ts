export default class mocksModel {
  id: number
  categoria = ''
  imagem = ''
  plataformas = ''
  precoAntigo: number
  preco: number
  titulo = ''
  constructor(
    id: number,
    categoria: string,
    imagem: string,
    plataformas: string,
    precoAntigo: number,
    preco: number,
    titulo: string
  ) {
    ;(this.id = id),
      (this.categoria = categoria),
      (this.imagem = imagem),
      (this.plataformas = plataformas),
      (this.precoAntigo = precoAntigo),
      (this.preco = preco),
      (this.titulo = titulo)
  }
}
