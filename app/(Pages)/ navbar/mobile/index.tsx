type Props = {
  className?: string;
}

const MobileNavBar = ({ className }: Props) => {
  return(
    <nav className={`${className} `}>Mobile</nav>
  )
}

export default MobileNavBar