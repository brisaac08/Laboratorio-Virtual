import { useEffect, useState } from 'react'
import '../styles/materias/NuevaActividad.css'
import Ondas from '../../assets/ondas.png'
import Electromagnetismo from '../../assets/electromagnetismo.png'
import { useNavigate } from 'react-router-dom'

export function NuevaActividad(props) {
  const { materia, expiracion, titulo, index } = props
  const [imagen, setImagen] = useState('')
  const [formattedDate, setFormattedDate] = useState('')
  const [formattedTime, setFormattedTime] = useState('')
  const navigate = useNavigate()

  // Formatear la fecha y la hora
  const formatearFecha = () => {
    const date = new Date(expiracion)
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    setFormattedDate(`${day}/${month}`)
    setFormattedTime(`${hours}:${minutes}`)
  }

  // Asignar la imagen según la materia
  const iconoActividad = nombre => {
    switch (nombre) {
      case 'Electromagnetismo':
        setImagen(Electromagnetismo)
        break
      case 'Ondas':
        setImagen(Ondas)
        break
      case 'Matematicas':
        setImagen(Electromagnetismo)
        break
      default:
        setImagen(Ondas)
    }
  }

  useEffect(() => {
    iconoActividad(materia)
    formatearFecha()
  }, [materia, expiracion])

  return (
    <div className='aside-activity' onClick={() => navigate(`/Activitiesoverview/${index}`)}>
      <img src={imagen} className='activity-image' alt={`${materia} icon`} />
      <div className='activity-description'>
        <h4 className='activity-title'>{titulo}</h4>
        <p className='activity-text'>{materia}</p>
        <p>Fecha Entrega: {`${formattedDate}, ${formattedTime}`}</p>
      </div>
    </div>
  )
}
