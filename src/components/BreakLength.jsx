

export const BreakLength = () => {
  //default break length
  const breakLength = 5;
  // insert button icons
  const downIcon = "down icon";
  const upIcon = "up icon";

  return (
    <>
      <h2>Break Length</h2>
      <span>
        <i>{downIcon}</i>
        <p>{breakLength}</p>
        <i>{upIcon}</i>
      </span>
    </>
  )
}
