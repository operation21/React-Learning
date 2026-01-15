function Uncontrolled() {
  const handleForm = (event) => {
    event.preventDefault();

    const user = document.querySelector("#user").value;
    const password = document.querySelector("#password").value;

    console.log(user, password);
  };

  return (
    <div>
      <h1>Uncontrolled Component</h1>

      <form onSubmit={handleForm}>
        <input type="text" id="user" placeholder="Enter user name" /><br />
        <input type="password" id="password" placeholder="Enter password" /><br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Uncontrolled;
