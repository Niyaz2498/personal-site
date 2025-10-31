import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#ffffff', // emerald-50
      borderBottom: '1px solid #ffffff' // emerald-200
    }}>
      <Link href="/" style={{
        textDecoration: 'none',
        color: '#012319', // emerald-900
        fontSize: '1.5rem',
        fontWeight: 'bold'
      }}>
        Niyaz's Site
      </Link>
      <Link href="/blogs" style={{ textDecoration: 'none', color: '#012319', fontSize: '1.2rem' }}>
        Blogs
      </Link>
    </nav>
  );
}