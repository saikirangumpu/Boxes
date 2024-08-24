const Box = props => {
  //  Write your code here.
  const {className, text} = props
  return (
    <div className={className}>
      <p className='box-text'> {text} </p>
    </div>
  )
}

const element = (
  //  Write your code here.
  <div className='bg-container'>
    <div className='content-container'>
      <h1 className='title'> Boxes </h1>
      <div className='box-container'>
        <Box className='small-box' text='Small' />
        <Box className='medium-box' text='Small' />
        <Box className='large-box' text='Small' />
      </div>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
