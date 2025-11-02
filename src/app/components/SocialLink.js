import Image from 'next/image';

export default function SocialLink({icon, name, alt, href}) {
  return (
    <div className='ConnectSection' style={{color: "#ffffff", display: "inline-flex", flexDirection: "row", gap: "10px", alignItems: "center", justifyContent: "center", flex: "auto", padding: "5px"}}>
        <Image src={icon} alt={alt} width={25} height={20} />
        <a href={href} target="_blank" rel="noopener noreferrer">{name}</a>
    </div>
  );
}