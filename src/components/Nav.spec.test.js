import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/svelte'

import Nav from './Nav.svelte'

const navItems = ['home', 'about', 'blog']

describe('Nav component', () => {
  it('contains the correct items', () => {
    const { getByRole } = render(Nav, { segment: undefined })
    navItems.forEach((i) => {
      expect(getByRole('link', {name: i}))
        .toBeInTheDocument()
    })
  })

  it("shows the current page as 'home' by default", () => {
    const { getByRole } = render(Nav, { segment: undefined });
    expect(getByRole('link', {name: 'home'}))
      .toHaveAttribute('aria-current', 'page')

    const others = navItems.filter(i => i !== 'home')
    others.forEach((i) => {
      expect(getByRole('link', {name: i}))
        .not.toHaveAttribute('aria-current', 'page')
    })
  })

  it("can show 'about' as the current page", () => {
    const { getByRole } = render(Nav, { segment: 'about' });
    expect(getByRole('link', {name: 'about'}))
      .toHaveAttribute('aria-current', 'page')

    const others = navItems.filter(i => i !== 'about')
    others.forEach((i) => {
      expect(getByRole('link', {name: i}))
        .not.toHaveAttribute('aria-current', 'page')
    })
  })

  it("can show 'blog' as the current page", () => {
    const { getByRole } = render(Nav, { segment: 'blog' });
    expect(getByRole('link', {name: 'blog'}))
      .toHaveAttribute('aria-current', 'page')

    const others = navItems.filter(i => i !== 'blog')
    others.forEach((i) => {
      expect(getByRole('link', {name: i}))
        .not.toHaveAttribute('aria-current', 'page')
    })
  })
})
