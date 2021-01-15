
const Statistics = ({ allChapters, percent }) => {
  return (
    <div className="statistics">
      <div >
        количество разделов: {allChapters ?? 0}
      </div>
      <div>
        процент готовности: {percent ?? 0}
      </div>
      </div>
  )
}

export default Statistics