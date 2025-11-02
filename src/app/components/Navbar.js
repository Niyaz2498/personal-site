import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #50c878'
    }}>
      <Link href="/" style={{
        textDecoration: 'none',
        color: '#036145',
        fontSize: '1.5rem',
        fontWeight: 'bold'
      }}>
        Niyaz's Site
      </Link>
      <Link href="/blogs" style={{ textDecoration: 'none', color: '#036145', fontSize: '1.2rem' }}>
        Blogs
      </Link>
    </nav>
  );
}