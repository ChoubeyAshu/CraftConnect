function Footer() {
  return (
    <footer
      className="absolute bottom-0 left-0 right-0 z-50 text-white text-center py-8"
      style={{
        background:
          "linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))",
      }}
    >
      {/* Main Footer Content */}
      <p className="text-sm md:text-base lg:text-lg px-4">
        &copy; Built by{" "}
        <span className="text-orange-500">
          <a
            href="https://l.instagram.com/?u=https%3A%2F%2Fdiscord.gg%2FxznnmfGCer&e=AT1dsyx0LBOKrH3b-BbWb-qUlil2IDTtuJyav2KMTbu8SHSu8O6F9QUWkWnlbSfX4jkVG96NzXhRu4jbVXyVmENC7DYEh7yo"
            target="_blank"
            rel="noopener noreferrer"
          >
            ASHUTOSH
          </a>
        </span>
      </p>
    </footer>
  );
}

export default Footer;
