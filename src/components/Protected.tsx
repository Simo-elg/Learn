import type { ReactNode} from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// 💡 on décrit les props :
// - isLogged : booléen (connecté ?)
// - children : le composant protégé à rendre si isLogged est vrai
interface ProtectedProps {
  isLogged: boolean
  children: ReactNode
}

export default function Protected({ isLogged, children }: ProtectedProps) {
  const navigate = useNavigate()        // 1. hook pour naviguer (URL) sans rechargement

  useEffect(() => {                     // 2. effet côté “montage” et à chaque changement de isLogged
    if (!isLogged) {
      // 3. si pas connecté, redirection impérative vers /login
      navigate('/login', { replace: true })
      // replace:true → n’ajoute pas d’entrée dans l’historique du navigateur
    }
  }, [isLogged, navigate])             // 4. on relance cet effet si isLogged change

  // 5. Si isLogged = true, on affiche le contenu enfant ; sinon on affiche rien
  return <>{isLogged ? children : null}</>
}
