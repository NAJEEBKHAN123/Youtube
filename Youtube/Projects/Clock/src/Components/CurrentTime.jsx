

function CurrentTime() {
    let date = new Date();
  return (
    <p>this is the current time:{date.toLocaleDateString()} - {date.toLocaleTimeString()}</p>
  )
}

export default CurrentTime
