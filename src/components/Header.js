
import PropTypes from 'prop-types'
import Button from './Button';


const Header = ({title,onAdd,showAdd}) => {
 
  return (
    <header className='header'>
        <h1 >{title}</h1>
       
        <Button  onClick ={onAdd} text={showAdd?'Close':'Add'}
        color={showAdd?'red':'green'}/>
      
        
    </header>
  )
}
Header.defaultProps = {
    title:'All that needs to be done'
}
Header.propTypes = {
    title : PropTypes.string.isRequired
}

const HeadingStyle = {
    color:'green',
    backgroundColor : 'grey',
    textAlign:'left'

}
export default Header