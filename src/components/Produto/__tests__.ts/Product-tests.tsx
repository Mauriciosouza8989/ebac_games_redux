import { fireEvent, screen } from '@testing-library/react'
import Produto from '..'
import { RenderizaComProvider } from '../../../utils/tests'
const jogo = {
  id: 2,
  categoria: 'RPG',
  imagem: '',
  plataformas: ['windows', 'mobile'],
  precoAntigo: 299.9,
  preco: 199.9,
  titulo: 'Resident Evil'
}

describe('Testes para o componente Produto', () => {
  test('Deve renderizar corretamente', () => {
    RenderizaComProvider(<Produto game={jogo} />)
    expect(screen.getByText('Resident evil')).toBeInTheDocument()
  })
  test('Deve clicar no botão', () => {
    const { store } = RenderizaComProvider(<Produto game={jogo} />)
    fireEvent.click(screen.getByTestId('btn-add-product'))
    expect(store.getState().carrinho.itens).toHaveLength(1)
  })
})
