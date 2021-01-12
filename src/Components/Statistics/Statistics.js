
const Statistics = ({ ownProps : {allChapters, percent}}) => {
  return (
    <div className="statistics">
      <div >
        количество разделов: {allChapters} 
      </div>
      <div>
        процент готовности: {percent}
      </div>
      </div>
  )
}

export default Statistics