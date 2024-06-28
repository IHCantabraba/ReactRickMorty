import Btn from '../btn/btn'

const NavPage = (props) => {
  return (
    <header className='d-flex justify-content-between align-items-center'>
      <Btn
        page={props.page}
        funcion={() => {
          props.setPage(props.page - 1)
        }}
      />
      <p>Page: {props.page}</p>
      <button
        className='btn btn-primary btn-sm '
        onClick={() => {
          props.setPage(props.page + 1)
        }}
      >
        Page {props.page + 1}
      </button>
    </header>
  )
}
export default NavPage
