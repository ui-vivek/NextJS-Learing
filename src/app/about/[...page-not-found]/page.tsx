import React from 'react'

export function generateStaticParams() {
  return [
    { 'page-not-found': ['404'] },
    { 'page-not-found': ['error'] }
  ]
}

export default function NotFound({ params }: { params: { 'page-not-found': string[] } }) {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The requested path {params['page-not-found'].join('/')} does not exist.</p>
    </div>
  )
}
