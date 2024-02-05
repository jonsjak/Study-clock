export const StudyLength = () => {
  //default study length
  const studyLength = 5;
  // insert button icons
  const downIcon = "down icon";
  const upIcon = "up icon";

  return (
    <>
      <h2>StudyLength</h2><span>
        <i>{downIcon}</i>
        <p>{studyLength}</p>
        <i>{upIcon}</i>
      </span>
    </>
  )
}
