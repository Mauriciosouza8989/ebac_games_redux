import { screen } from '@testing-library/react'
import Header from '..'
import { RenderizaComProvider } from '../../../utils/tests'

describe('Testes para o componente Header', () => {
  test('Deve renderizar o header', () => {
    RenderizaComProvider(<Header />)
    expect(screen.getByText('EBAC Games')).toBeInTheDocument()
  })
  test('Deve renderizar com dois itens  no carrinho', () => {
    RenderizaComProvider(<Header />, {
      preloadedState: {
        carrinho: {
          itens: [
            {
              id: 1,
              categoria: 'RPG',
              imagem: '',
              plataformas: ['windows'],
              precoAntigo: 199.9,
              preco: 150.0,
              titulo: 'Elden Ring'
            },
            {
              id: 2,
              categoria: 'RPG',
              imagem: '',
              plataformas: ['windows', 'mobile'],
              precoAntigo: 299.9,
              preco: 199.9,
              titulo: 'Resident Evil'
            }
          ]
        }
      }
    })
    expect(screen.getByTestId('qtd-carrinho').innerHTML).toContain('2 itens')
  })
})
