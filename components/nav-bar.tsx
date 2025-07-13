import Link from "next/link";
import ModeToggle from "./mode-toggel";

type NavItemProps = {
  href: string;
  label: string;
};

function NavItem({ href, label }: NavItemProps) {
  return (
    <Link
      href={href}
      className="hover:text-[var(--foreground)] transition-colors"
    >
      {label}
    </Link>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <nav className="px-4 py-2 bg-background text-muted-foreground flex justify-between items-center">
        <Link href={"/"}>
          <h3 className="text-lg font-bold hover:text-[var(--foreground)] transition-colors">
            My Portfolio
          </h3>
        </Link>

        <div className="flex items-center space-x-4">
          <NavItem href="/resume" label="Resume" />
          <NavItem href="/about" label="About" />
          <NavItem href="/projects" label="Projects" />
          <NavItem href="/contact" label="Contact" />
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
