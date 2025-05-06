export default function App() {
  document.addEventListener('DOMContentLoaded', () => {
    const appElement = document.querySelector('h1')
    appElement.style.opacity = 0
    appElement.style.transition = 'opacity 1s ease-in-out'

    setTimeout(() => {
      appElement.style.opacity = 1
    }, 100)
  })

  return (
    <div>
      <h1 className="bg-red-400 py-4 text-center font-bold leading-5 text-2xl text-white shadow-md shadow-red-500/50">
        Welcome to Filmpire
      </h1>
    </div>
  )
}
