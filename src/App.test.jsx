import { render, screen } from '@testing-library/react'
import App from './App'
import blogData from './blog'

// Jest test to verify prop-based rendering
describe('App Component Tests', () => {
  test('renders blog name from props correctly', () => {
    render(<App />)
    const blogName = screen.getByText(blogData.name)
    expect(blogName).toBeInTheDocument()
  })

  test('renders about text from props correctly', () => {
    render(<App />)
    const aboutText = screen.getByText(blogData.about)
    expect(aboutText).toBeInTheDocument()
  })

  test('renders all article titles from props', () => {
    render(<App />)
    blogData.articles.forEach(article => {
      const articleTitle = screen.getByText(article.title)
      expect(articleTitle).toBeInTheDocument()
    })
  })

  test('renders correct number of articles', () => {
    render(<App />)
    const articles = screen.getAllByRole('article')
    expect(articles.length).toBe(blogData.articles.length)
  })
})
