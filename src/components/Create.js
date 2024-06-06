function Create() {
  return (
    <div className="container">
      <div className="center">
        <h2>Create Account</h2>
        <form action="#">
          <div className="form-group">
            <label htmlFor="fullname">Full Name:</label>
            <input type="text" id="fullname" name="fullname" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Create Account</button>
        </form>
        <p className="login-link">
          Already have an account? <a href="./login.html">Sign In</a>
        </p>
      </div>
    </div>
  );
}
