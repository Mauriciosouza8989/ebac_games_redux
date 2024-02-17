import { screen, waitFor } from '@testing-library/react'
import Produto from '..'
import { RenderizaComProvider } from '../../../utils/tests'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

const mocks = [
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
    categoria: 'Ação',
    imagem: '',
    plataformas: ['windows', 'PS5'],
    precoAntigo: 299.9,
    preco: 199.9,
    titulo: 'Resident Evil'
  }
]

const server = setupServer(
  rest.get('http://localhost:4000/produtos', (req, res, ctx) => {
    return res(ctx.json(mocks))
  })
)

describe('Testes para o container produtos', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  test('Deve renderizar correctamente o texto de carregamento', () => {
    RenderizaComProvider(<Produto />)
    expect(screen.getByText('Carregando...')).toBeInTheDocument()
  })
  test('Deve renderizar correctamente com a listagem de jogos', async () => {
    const { debug } = RenderizaComProvider(<Produto />)
    await waitFor(() => {
      debug()
      expect(screen.getByText(/resident evil/i)).toBeInTheDocument()
    })
  })
})
