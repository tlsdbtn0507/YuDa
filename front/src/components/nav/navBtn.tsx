import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome"
import css from '../../css/lowNav.module.css'
import { IconDefinition } from "@fortawesome/free-solid-svg-icons"

const NavBtn = (props: { icon: IconDefinition, p: string }) => {

  const { icon, p } = props;

  return (
    <>
      <button>
        <FontAwesomeIcon className={css.icon} icon={icon}/>
        <p className={css.btnP}>{p}</p>
      </button>
    </>
  )
}

export default NavBtn