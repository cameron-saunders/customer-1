export default function Page() {
    return (
      <>
        <h1>Add Customer</h1>
        <form>
          <label htmlFor="fname">First Name</label>
          <input id='fname' type="text" name='first_name'/>
          <label htmlFor="lname">Last Name</label>
          <input id='lname' type="text" name='last_name'/>
          <button>Save</button>
        </form>
      </>
    );
  }
  