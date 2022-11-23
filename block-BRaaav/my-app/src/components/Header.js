/** @format */

function Header() {
  return (
    <header className="navbar">
      <div className="container flex">
        <div className="flex">
          <a className="brand" href="#"></a>

          <nav>
            <ul className="flex nev-menu nav-menu-primary">
              <li>
                <a href="#">home</a>
              </li>
              <li>
                <a href="#">home</a>
              </li>
              <li>
                <a href="#">home</a>
              </li>
              <li>
                <a href="#">home</a>
              </li>
              <li>
                <a href="#">home</a>
              </li>
            </ul>
          </nav>
        </div>
        <nav>
          <ul class="flex nav-menu nav-menu-secondary">
            <li class="social-media-item">
              <a href="#">
                <i class="fab fa-facebook-square"></i>
              </a>
            </li>
            <li class="social-media-item">
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li class="social-media-item">
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a class="btn btn-primary" href="#">
                {" "}
                Sign in / Join{" "}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
