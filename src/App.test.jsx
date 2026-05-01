import { render, screen } from '@testing-library/react'
import App from './components/App'
import blogData from './blog'

// Test blog name
test('renders blog name from props correctly', () => {
  render(<App />)
  const blogName = screen.getByText(blogData.name)
  expect(blogName).toBeInTheDocument()
})

// Test about text
test('renders about text from props correctly', () => {
  render(<App />)
  const aboutText = screen.getByText(blogData.about)
  expect(aboutText).toBeInTheDocument()
})

// Test article titles
test('renders all article titles from props', () => {
  render(<App />)
  blogData.articles.forEach(article => {
    const articleTitle = screen.getByText(article.title)
    expect(articleTitle).toBeInTheDocument()
  })
})

// Test number of articles
test('renders correct number of articles', () => {
  render(<App />)
  const articles = screen.getAllByRole('article')
  expect(articles.length).toBe(blogData.articles.length)
})