
const Statistics = ({chapters, subChapters}) => {

  const allChapters = chapters.length + subChapters.length
  const completeChapters = chapters.filter(el => el.completed).length + subChapters.filter(el => el.completed).length
  const percent = Math.floor((completeChapters / allChapters) * 100)

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